import { defineConfig } from 'umi';
import px2rem from 'postcss-px2rem';

export default defineConfig({
  favicon: 'https://jzx-h5.oss-cn-hangzhou.aliyuncs.com/logo.ico',
  hash: true,
  dva: {
    immer: true,
    hmr: false,
  },
  antd: {
    mobile: false,
  },
  publicPath: '/',
  fastRefresh: {},
  // webpack5: {},
  // mfsu: {},
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  extraPostCSSPlugins: [px2rem({ remUnit: 37.5, exclude: /node_modules/i })],
  routes: [
    {
      path: '/',
      component: '@/layouts/BlankLayout',
      wrappers: ['@/wrappers/SecurityWrapper'],
      routes: [
        // { exact: true, path: '/', redirect: '/home' },
        {
          path: '/',
          component: '@/pages/index',
          name: '首页',
          title: '首页',
          icon: 'EntranceOutlined',
        },
      ],
    },
  ],
  define: {
    'process.env.BASE_API': '/api',
  },
  proxy: {
    '/api': {
      target: 'http://mock.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  theme: {
    // 'primary-color': '#2228e0',
    // 'info-color': '#2228e0',
    // 'processing-color': '#2228e0',
    // 'link-color': '#2228e0',
    // 'success-color': '#46cf84',
    // 'warning-color': '#ffa42e',
    // 'error-color': '#fa4646',
    // 'highlight-color': '#fa4646',
    // 'normal-color': '#e0e0e0',
    // 'heading-color': '#000000',
    // 'text-color': '#4a4a4a',
    // 'text-color-secondary': '#7c7c7c',
    // 'disabled-color': '#c7c7c7',
    // 'border-radius-base': '3px',
    // 'border-color-base': '#e0e0e0',
    // 'font-family':
    //   '"Alibaba PuHuiTi", "SourceHanSans TW", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    // 'padding-lg': '24px',
    // 'padding-md': '16px',
    // 'padding-sm': '12px',
    // 'padding-xs': '8px',
    // 'padding-xxs': '4px',
    // 'margin-lg': '24px',
    // 'margin-md': '16px',
    // 'margin-sm': '12px',
    // 'margin-xs': '8px',
    // 'margin-xxs': '4px',
  },
  locale: {
    default: 'zh-CN',
    antd: false,
  },
  ignoreMomentLocale: true,
  targets: {
    ie: 10,
  },
  // extraBabelPlugins: [
  //   [
  //     'import',
  //     {
  //       libraryName: 'antd-mobile',
  //       libraryDirectory: 'es/components',
  //       style: false,
  //     },
  //   ],
  // ],
});
