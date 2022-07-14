import { extend } from 'umi-request';
import { Toast } from 'antd-mobile';
import CodeMsg from '@/assets/data/code';
import { BaseResponse } from '@/interfaces/base';

/**
 * 错误处理
 * @param data {Object} 请求返回的信息
 */
export function handleError(data: BaseResponse) {
  const msg = CodeMsg[data.code] || data.msg || CodeMsg['DEFAULT_TIP_MESSAGE'];
  Toast.show({
    content: msg,
  })
}

// create an axios instance
const service = extend({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 1000,
  mode: 'cors',
  errorHandler: (error: any) => handleError(error),
});

// request interceptor
service.interceptors.request.use(
  (url: string, config: any) => {
    // 防止 GET 请求缓存GET
    if (config.method === 'GET') {
      const t = new Date().getTime();
      config.params = config.params ? { ...config.params, t } : { t };
    }
    return config;
  }
);

// response interceptor
service.interceptors.response.use(
  async (response: any) => {
    const res = await response.clone().json();
    if (Number(res.code) !== 200) {
      if (Number(res.code) === 1007) {
        // 登录失效
        window.location.href = '/';
        return Promise.resolve();
      }
      handleError(res);
      return Promise.resolve();
    }
    return res.data;
  }
);

export default service;
