import { getWxAuthorities } from '@/services/common';
import { checkDevice } from '@nicecode/tools';
import wx from 'weixin-js-sdk';

//  要用到微信API
function getJSSDK(
  shareUrl: string,
  shareMsg: {
    title: string;
    desc: string;
    link: string;
    imgUrl: string;
  },
) {
  if (checkDevice.isWeChat()) {
    getWxAuthorities({ url: shareUrl }).then(
      (res: {
        data: {
          appId: string;
          timestamp: number;
          echostr: string;
          signature: string;
        };
      }) => {
        wx.config({
          // debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: res.data.appId, // 必填，公众号的唯一标识
          timestamp: res.data.timestamp, // 必填，生成签名的时间戳
          nonceStr: res.data.echostr, // 必填，生成签名的随机串
          signature: res.data.signature, // 必填，签名
          jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'],
        });
        wx.ready(() => {
          // 分享给微信朋友
          wx.updateAppMessageShareData({
            title: shareMsg.title,
            desc: shareMsg.desc,
            link: shareMsg.link,
            imgUrl: shareMsg.imgUrl,
            success: function success(res: any) {
              console.log(res, '分享成功');
            },
            cancel: function cancel() {
              // console.log('已取消');
            },
            fail: function fail() {
              // alert(JSON.stringify(res));
            },
          });
          // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
          wx.updateTimelineShareData({
            title: shareMsg.title,
            link: shareMsg.link,
            imgUrl: shareMsg.imgUrl,
            success: function success(_res: any) {
              // alert('已分享');
            },
            cancel: function cancel(_res: any) {
              // alert('已取消');
            },
            fail: function fail() {
              // alert(JSON.stringify(res));
            },
          });
          // 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
          //   wx.onMenuShareQQ({
          //     title: shareMsg.title,
          //     desc: shareMsg.desc,
          //     link: shareMsg.linkurl,
          //     imgUrl: shareMsg.img,
          //     trigger: function trigger(res) {
          //       //alert('用户点击分享到QQ');
          //     },
          //     complete: function complete(res) {
          //       alert(JSON.stringify(res));
          //     },
          //     success: function success(res) {
          //       //alert('已分享');
          //     },
          //     cancel: function cancel(res) {
          //       //alert('已取消');
          //     },
          //     fail: function fail(res) {
          //       //alert(JSON.stringify(res));
          //     }
          //   });
          // 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
          //   wx.onMenuShareWeibo({
          //     title: shareMsg.title,
          //     desc: shareMsg.desc,
          //     link: shareMsg.linkurl,
          //     imgUrl: shareMsg.img,
          //     trigger: function trigger(res) {
          //       //alert('用户点击分享到微博');
          //     },
          //     complete: function complete(res) {
          //       // alert(JSON.stringify(res));
          //     },
          //     success: function success(res) {
          //       //alert('已分享');
          //     },
          //     cancel: function cancel(res) {
          //       // alert('已取消');
          //     },
          //     fail: function fail(res) {
          //     // alert(JSON.stringify(res));
          //     }
          //   });
        });
        wx.error(() => {
          // alert("微信验证失败");
        });
      },
    );
  }
}
export default {
  // 获取JSSDK
  getJSSDK,
};
