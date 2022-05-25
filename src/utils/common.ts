import Taro from '@tarojs/taro';

/**
 * 构建播放器实例
 * @param path 音频文件地址
 * @returns 播放器实例
 */
export const initVoice = (path: string) => {
  let voiceContext: Taro.InnerAudioContext = {} as any;
  voiceContext = Taro.createInnerAudioContext();
  voiceContext.src = path;
  voiceContext.onEnded(() => {
    voiceContext.destroy();
  });
  return voiceContext;
};
