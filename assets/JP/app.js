import localData from './assets/localData/localData.js'
import config from './config/config.js'
import request from './utils/request.js'

App({
  config,//配置文件
  localData, //本地数据
  request,//请求工具

  //提示信息，或跳转到登陆
  btnLogin: function (res) {
    this.showModal(res.msg);
    if (res.state == "401" || res.state == 401) {
      wx.navigateTo({
        url: '/pages/wxUserinfoLogin/wxUserinfoLogin',
      });
    }
  },

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

  //提示框，有按钮
  showModal: function (msg) {
    wx.showModal({
      title: "提示",
      content:msg,
      showCancel: false,
    });
  },

  //提示，无按钮
  showToast: function (msg, icon) {
    wx.showToast({
      title: msg,
      icon: icon,
      duration: 2000
    })
  },

  //常用
  globalData: {
    openid:null,//
    appid: 'wx2c5b4fc4466c3e4e',//   //小程序appid
    secret: '955755f5b32225c397c9a61a044b5db6',// //小程序密钥    
    userInfo: null
  }
})