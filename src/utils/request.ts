import Taro from '@tarojs/taro';
import { BaseResponse } from '@/interface/base';
import CodeMsg from '@/assets/data/code.json';

export const DEFAULT_TIP_MESSAGE = '请求失败，请刷新重试';

/**
 * 错误处理
 * @param {Object} data 请求返回的信息
 */
export function handleError(data) {
  const message = CodeMsg[data.code] || data.msg || DEFAULT_TIP_MESSAGE;
  Taro.atMessage({
    message,
    type: 'error',
  });
}

const request = (options) => {
  return new Promise<BaseResponse>((resolve, reject) => {
    Taro.request({
      timeout: 5000,
      mode: 'cors',
      success(res) {
        const { data } = res;
        if (!data.success) {
          handleError(data);
        }
        resolve(data);
      },
      fail(err) {
        Taro.atMessage({ message: DEFAULT_TIP_MESSAGE, type: 'error' });
        reject(err);
        // for debug
        console.log(err);
      },
      ...options,
      header: {
        'content-type': 'application/json', // 默认值
        token: Taro.getStorageSync('token'),
        ...options.header,
      },
      url: `${process.env.BASE_URL || ''}${process.env.BASE_API || ''}${
        options.url || ''
      }`,
    });
  });
};

export default request;
