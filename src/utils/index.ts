import { Toast } from 'antd-mobile';

export const resize = () => {
  let width = document.documentElement.clientWidth;
  let height = document.documentElement.clientHeight;
  console.log(width, height);
  let root = document.querySelector('#root') as any;
  root.style.position = 'relative';
  // root.style.overflow = 'hidden';
  root.style.top = '50%';
  root.style.left = '50%';
  root.style['transform-origin'] = '50% 50%';

  if (width > height) {
    // 横屏
    // 判断比例是否正确
    root.style.width = height * 1.78 + 'px';
    root.style.height = height + 'px';
    root.style.transform = 'translate(-50%, -50%)';
    // 不旋转
  } else {
    // 竖屏
    root.style.width = width * 1.78 + 'px';
    root.style.height = width + 'px';
    root.style.transform = 'translate(-50%, -50%) rotate(90deg)';
  }
};

/**
 * 复制粘贴
 * @param value 需要复制粘贴的值
 */
export const copy = function (value: any) {
  return new Promise((resolve) => {
    let copyTextArea = null;
    try {
      copyTextArea = document.createElement('textarea');
      copyTextArea.style.height = '0px';
      copyTextArea.style.opacity = '0';
      copyTextArea.style.width = '0px';
      document.body.appendChild(copyTextArea);
      copyTextArea.value = value;
      copyTextArea.select();
      document.execCommand('copy');
      Toast.show({
        content: '链接复制成功！',
      });
      resolve(value);
    } finally {
      if (copyTextArea?.parentNode) {
        copyTextArea.parentNode.removeChild(copyTextArea);
      }
    }
  });
};
