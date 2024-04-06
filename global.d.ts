interface IBaseAPI {
  uploadFile: (path: File[]) => void
  setTitle: (value: string) => void
  onUploadProgress: (progress: unknown) => void
}

interface Window {
  baseAPI: IBaseAPI
}