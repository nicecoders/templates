import { message, Upload, UploadProps } from 'antd'

const { Dragger } = Upload;

const props: UploadProps = {
  name: 'file',
  multiple: true,
  capture: 'user',
  hasControlInside: false,
  action: file => {
    console.log('file', file)
    // @ts-ignore
    window.baseAPI.uploadFile(file.path)
    // @ts-ignore
    window.baseAPI.setTitle(file.path)
    return 'file'
  },
  onChange(info) {
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

  return (
    <div>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          ✋
        </p>
        <p className="ant-upload-text">文件拖拽到这上传</p>
      </Dragger>
    </div>
  )
}