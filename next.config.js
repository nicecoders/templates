const withCSS = require('@zeit/next-css');
const withLessExcludeAntd = require('./next-less.config');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

// Where your antd-custom.less file lives
const modifyVars = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, './src/styles/antd-custom.less'),
    'utf8',
  ),
);

require('dotenv').config();

module.exports = withLessExcludeAntd(
  withCSS({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]',
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars, // make your antd custom effective
    },
    webpack: (config, { isServer }) => {
      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/;
        const origExternals = [...config.externals];
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals),
        ];

        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader',
        });
      }
      // 别名
      config.resolve.alias['@'] = path.resolve(__dirname, './src');
      config.resolve.alias['@static'] = path.resolve(__dirname, './static');
      return config;
    },
    env: {
      CLIENT_BASE_API: process.env.CLIENT_BASE_API,
    },
    // 用上面的方式使用a[b]的取值取不到
    publicRuntimeConfig: {
    },
  }),
);
