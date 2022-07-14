import { defineConfig } from 'umi';

export default defineConfig({
  favicon: 'http://localhost:8000',
  hash: true,
  dva: {
    immer: true,
    hmr: false,
  },
  webpack5: {},
  mfsu: {},
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  routes: [
    {
      path: '/window',
      component: '@/layouts/WindowLayout',
      routes: [
        {
          path: 'demo',
          component: '@/pages/index',
          name: '一级菜单',
          title: '一级菜单',
          icon: 'EntranceOutlined',
        }
      ]
    },
    {
      path: '/',
      component: '@/layouts/BasicLayout',
      // wrappers: ['@/wrappers/SecurityLayout'],
      routes: [
        { exact: true, path: '/', redirect: '/a' },
        {
          path: 'a',
          component: '@/pages/index',
          name: '一级菜单',
          title: '一级菜单',
          icon: 'EntranceOutlined',
        },
        {
          path: 'b',
          name: '一级菜单',
          title: '一级菜单',
          icon: 'EntranceOutlined',
          routes: [
            { exact: true, path: '/b', redirect: '/b/c' },
            {
              path: 'c',
              component: '@/pages/index',
              name: '二级菜单',
              title: '二级菜单',
            },
          ],
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
    'primary-color': '#2228e0',
    'info-color': '#2228e0',
    'processing-color': '#2228e0',
    'link-color': '#2228e0',
    'success-color': '#46cf84',
    'warning-color': '#ffa42e',
    'error-color': '#fa4646',
    'highlight-color': '#fa4646',
    'normal-color': '#e0e0e0',
    'heading-color': '#000000',
    'text-color': '#4a4a4a',
    'text-color-secondary': '#7c7c7c',
    'disabled-color': '#c7c7c7',
    'border-radius-base': '3px',
    'border-color-base': '#e0e0e0',
    'font-family':
      '"Alibaba PuHuiTi", "SourceHanSans TW", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    'padding-lg': '24px',
    'padding-md': '16px',
    'padding-sm': '12px',
    'padding-xs': '8px',
    'padding-xxs': '4px',
    'margin-lg': '24px',
    'margin-md': '16px',
    'margin-sm': '12px',
    'margin-xs': '8px',
    'margin-xxs': '4px',
  },
  locale: {
    default: 'zh-CN',
    antd: true,
  },
  ignoreMomentLocale: true,
  targets: {
    ie: 10,
  }
});
