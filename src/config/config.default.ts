import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1664331917250_5937',
  koa: {
    port: 7001,
  },
  cors: {
    credentials: false,
  },
  // mongoose: {
  //   dataSource: {
  //     default: {
  //       uri: 'mongodb://localhost:27017/test',
  //       options: {
  //         useNewUrlParser: true,
  //         useUnifiedTopology: true,
  //         user: '***********',
  //         pass: '***********'
  //       },
  //       // 关联实体
  //       entities: []
  //     }
  //   }
  // },
} as MidwayConfig;
