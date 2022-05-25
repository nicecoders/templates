import clientRequest from '@/utils/clientRequest';

export interface HelloWordParams {
  pageIndex?: number;
  pageSize?: number;
  keyword: string;
}

// 获取应用列表
export const helloWordApi = (params: HelloWordParams): Promise<any> =>{
  return clientRequest({
    url: '/test/helloWord',
    params,
  });
}
  
