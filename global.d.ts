interface IBaseAPI {
  uploadFile: (path: string) => void
  setTitle: (value: string) => void
}

interface Window {
  baseAPI: IBaseAPI
}