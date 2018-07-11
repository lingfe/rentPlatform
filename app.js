import config from './config/config'
import request from './assets/plugins/request'
import md5 from './utils/md5.js'
import service from './utils/server.js'
import dahuoData from './helpers/dahuoData.js'

App({
  config, //配置信息
  request,//请求
  md5,    //md5加密
  service,//位置服务
  dahuoData, //筛选数据
  //验证非空
  checkInput: function (data) {
    if (data == null || data == undefined || data == "" || data == 'null') {
      return true;
    }
    if (typeof data == "string") {
      var result = data.replace(/(^\s*)|(\s*$)/g, "");
      return result.length == 0 ? true : false;
    } else {
      return false;
    }
  },

  //当前时间
  getDateTime: function () {
    var dateTime = new Date().toLocaleString();
    return dateTime;
  },


  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  //用户数据
  globalData: {
    userInfo: null,                 //用户数据
    openid: null,                   //微信用户id

    loginAppid: '3DF7469FD3A1485B95ED16ED794780A8',  //登录服务器的appid
    appid: 'wx2c5b4fc4466c3e4e',                    //小程序id
    secret: 'b2dec689f9b117a311891c6ac5ae9407',     //小程序的 app secret
    token: '31963CBD8CA24DEFB48B9799766F0583',      //请求唯一标识
  },
})