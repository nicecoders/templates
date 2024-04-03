import { message, Upload, UploadProps } from 'antd'
import { useEffect, useState } from 'react';

const { Dragger } = Upload;

const props: UploadProps = {
  name: 'file',
  multiple: true,
  capture: 'user',
  hasControlInside: false,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  action: false,
  onChange(info) {
    console.log('info', info)
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

export default () => {
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    window.baseAPI.onUploadProgress((_progress: unknown) => {
      console.log('_progress', _progress)
      setProgress(_progress)
    })
  }, [])

  return (
    <div>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          ✋{progress}
        </p>
        <p className="ant-upload-text">文件拖拽到这上传</p>
      </Dragger>
    </div>
  )
}