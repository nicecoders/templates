import fs from 'fs';
import path from 'path';
// import request from 'request';

export const uploadFile = (filePath: File['path']) => {
  console.log('123', 123)
  const fileStream = fs.createReadStream(filePath);
  const fileName = path.basename(filePath);
  const uploadUrl = 'http://your-upload-api.com/upload'; // 请替换为实际的上传地址

  console.log('fileStream', fileStream)

  fileStream.on('open', () => {
    console.log(`Start uploading file: ${fileName}`);
    // const req = request.post(uploadUrl, (err, resp, body) => {
    //   if (err) {
    //     console.error('Failed to upload file:', err);
    //   } else {
    //     console.log('File uploaded successfully!');
    //   }
    // });

    // fileStream.pipe(req);
  });

  fileStream.on('error', (err) => {
    console.error('Failed to open file stream:', err);
  });
}