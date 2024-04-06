import { Button, message, Upload } from 'antd'
import { useEffect, useState } from 'react';
import type { GetProp, UploadFile, UploadProps } from 'antd';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const { Dragger } = Upload;

export default () => {
  const [progress, setProgress] = useState(0)

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      formData.append('files[]', file as FileType);
    });
    setUploading(true);
    const filePaths = fileList.map((_file: any) => _file.path)
    console.log('filePaths', filePaths)
    window.baseAPI.uploadFile(filePaths)
    setUploading(false)
  };


  const uploadProps: UploadProps = {
    name: 'file',
    multiple: true,
    capture: 'user',
    hasControlInside: false,
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setFileList([...fileList, file]);

      return false;
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
    fileList,
  };
  
  return (
    <div>
      <Dragger {...uploadProps}>
        <p className="ant-upload-drag-icon">
          ✋{progress}
        </p>
        <p className="ant-upload-text">文件拖拽到这上传</p>
      </Dragger>
      <Button block onClick={() => handleUpload()} >上传</Button>
    </div>
  )
}