import request from '@/utils/request';

/**
 * 获取微信授权信息
 * @returns 获取微信授权信息
 */
export async function getWxAuthorities(data: { url: string; }): Promise<any> {
  return request.post('/dianhun/traffic/accident/weixin/param/v1', data);
}

/**
 * 获取用户信息
 * @returns 获取微信授权信息
 */
export async function getUserInfo(data: any): Promise<any> {
  return request.post(
    process.env.BASE_API + '/dianhun/traffic/accident/weixin/code/v1',
    data,
  );
}

export async function jumpToWxUrl(params: any): Promise<any> {
  return request.post(
    process.env.BASE_API + '/dianhun/traffic/accident/weixin/redirectUrl/v1',
    params,
  );
}
