import 'amfe-flexible';
import eruda from 'eruda'
import 'antd-mobile/es/global';
import '@/styles/index.less';
import '@/styles/reset.less';

if (process.env.UMI_ENV !== 'production') {
    eruda.init();
}

// 初始化，可以通过 useModel 调用
export function getInitialState() {
    return {}
}