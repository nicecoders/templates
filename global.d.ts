interface IBaseAPI {
  uploadFile: (path: string) => void
  setTitle: (value: string) => void
  onUploadProgress: (progress: unknown) => void
}

interface Window {
  baseAPI: IBaseAPI
}