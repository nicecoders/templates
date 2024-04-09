import { app, ipcMain } from 'electron';
import fs from 'fs';
import path from 'node:path';

ipcMain.on('uploadFile', (event, filePaths: string[]) => {
  // 获取用户当前文件夹路径
  // console.log('app', app.getPath('userData'))
  // const saveDirectoryPath = await app.getPath('downloads');
    for (let i = 0; i < filePaths.length; i++) {
        const fileName = path.basename(filePaths[i]);
        const targetFilePath = path.join(__dirname, fileName);
        const fileStream = fs.createWriteStream(targetFilePath);
        fileStream.write(fs.readFileSync(filePaths[i]));
        fileStream.end();
        console.log('Uploaded file saved at:', targetFilePath);
    }
  // const fileSize = fs.statSync(filePath).size;
  // let uploadedSize = 0;

  // const readStream = fs.createReadStream(filePath);

  // readStream.on('data', (chunk) => {
  //   uploadedSize += chunk.length;
  //   const progress = Math.round((uploadedSize / fileSize) * 100);
  //   sender.send('upload-progress', progress);
  // });

  // readStream.on('end', () => {
  //   sender.send('upload-success');
  // });

  // readStream.on('error', (err) => {
  //   sender.send('upload-error', err.message);
  // });
});


export const singleUpload = (file: File) => {
    const path = file.path;         //文件本地路径 
    const stats = fs.statSync(path);      //读取文件信息
    const chunkSize = 3 * 1024 * 1024;      //每片分块的大小3M
    const size = stats.size;            //文件大小
    const pieces = Math.ceil(size / chunkSize);       //总共的分片数  
    function uploadPiece (i: number) { 
        //计算每块的结束位置
        const endData = Math.min(size, (i + 1) * chunkSize);
        const arr: any[] = [];
        //创建一个readStream对象，根据文件起始位置和结束位置读取固定的分片
        const readStream = fs.createReadStream(path, { start: i * chunkSize, end: endData - 1 });
            //on data读取数据
            readStream.on('data', (data)=>{
                arr.push(data)
            }) 
            //on end在该分片读取完成时触发
            readStream.on('end', ()=>{
                //这里服务端只接受blob对象，需要把原始的数据流转成blob对象，这块为了配合后端才转
                const blob = new Blob(arr)
                //新建formdata数据对象
                const formdata = new FormData();
                formdata.append("file", blob);
                console.log('blob.size',blob.size)
                formdata.append("size", size + ''); // 数字30被转换成字符串"30"
                formdata.append("chunk", i + '');//第几个分片，从0开始
                formdata.append("chunks", pieces + '');//分片数
      })
  }
}