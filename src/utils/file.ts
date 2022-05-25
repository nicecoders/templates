import { Toast } from '@/utils/toast';
import Taro from '@tarojs/taro';
import { Loading } from './loading';

/**
 * 选择图片
 * @param option http://taro-docs.jd.com/taro/docs/apis/media/image/chooseImage/
 * @returns Promise<any>
 */
export const chooseImage = (option?: Taro.chooseImage.Option): Promise<any> => {
  const { count = 1, sourceType = ['album', 'camera'], ...rest } = option || {};

  return new Promise((resolve, reject) => {
    Taro.chooseImage({
      count,
      sourceType,
      ...rest,
      sizeType: ['compressed'],
      success: (res) => {
        resolve(res);
      },
      fail: (e) => {
        reject(e);
      },
    });
  });
};

/**
 * 上传文件
 * @param option https://taro-docs.jd.com/taro/docs/apis/network/upload/uploadFile
 * @returns Promise<any>
 */
export const uploadFile = (option: Taro.uploadFile.Option): Promise<any> => {
  Loading.show();
  return new Promise((resolve, reject) => {
    Taro.uploadFile({
      ...option,
      success(res) {
        if (res.statusCode === 200 && res.data) {
          const data = JSON.parse(res.data);
          resolve(data.success ? data.data : false);
        } else {
          resolve(true);
        }
      },
      fail(e) {
        Toast.info('上传失败');
        reject(e);
      },
      complete() {
        Loading.hide();
      },
    });
  });
};

/**
 * 获取 OSS 上传凭证
 * @param superKey 获取上传凭证的 superKey
 * @returns 上传凭证
 */
export const getSignature = async (superKey: string) => {
  try {
    const params = { superKey };
    // TODO: 根据业务修改获取 signature 方法
    // const res = await fn(params);
    const res: any = { ...params, success: true };
    if (res.success) {
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};

/**
 * 上传文件至 OSS
 * @param tempFile 临时文件
 * @param superKey 上传 OSS 用的 superKey
 * @returns 文件上传 OSS 地址
 */
export const uploadOSS = async (
  tempFile: Taro.chooseImage.ImageFile | Taro.chooseMessageFile.ChooseFile,
  superKey: string,
) => {
  // 获取上传oss参数
  const oss = await getSignature(superKey);
  if (oss) {
    // 无法获取图片名称，采用时间戳作为文件名
    const fileName = (tempFile as any)?.name
    // BUG
      ? `${+new Date()}`
      : `${+new Date()}`;
    const key = `${superKey}/${fileName}`;
    const { dir, policy, accessId: OSSAccessKeyId, signature, host } = oss;
    try {
      // 上传至 oss
      const res = await uploadFile({
        url: host,
        name: fileName,
        filePath: tempFile.path,
        formData: {
          dir,
          policy,
          OSSAccessKeyId,
          signature,
          key,
          success_action_status: '200',
        },
      });
      if (res) {
        // 返回文件地址
        return `${host}/${key}`;
      } else {
        Toast.info('上传失败');
      }
    } catch (e) {
      console.log('e', e);
    }
  }
};
