import axios from 'axios';
import { message } from 'antd';
import { IPagination } from '@/interfaces/base';
import codeMsg from '@/assets/data/code.json';

export interface BaseResponse {
  code: string;
  msg: string;
  memo?: string;
  data: any;
  page?: IPagination;
  result: number;
  success: boolean;
}

const DEFAULT_TIP_MESSAGE = '请求失败，请刷新重试';

const handleError = (data: BaseResponse) => {
  const msg = codeMsg[data.code] || data.msg || DEFAULT_TIP_MESSAGE;
  message.error(msg);
};

// create an axios instance
const service = axios.create({
  baseURL: process.env.CLIENT_BASE_API, // api的base_url
  method: 'GET',
  // timeout: 5000, // request timeout
});
// request interceptor
service.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (!res.success) {
      handleError(res);
    }
    return res;
  },
  (error) => {
    handleError(error);
    return Promise.reject(error);
  },
);

export default service;
