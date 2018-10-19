//index.js
//获取应用实例
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    is_bank: 0,//1,0。是否已绑定银行卡。
  },

  /**
   * 页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取当前用户信息，比如:余额
    that.getUserInfo(that);
    //获取用户是否已绑定银行卡
    //that.getis_bank(that);
  },

  //获取用户是否已绑定银行卡
  getis_bank: function (that) {
    wx.request({
      url: app.config.dszjPath_web + 'api/User/hasBank',
      method: "GET",
      header: {
        Token: wx.getStorageSync("token")
      },
      success: function (res) {
        that.setData({
          is_bank: res.data.data
        });
      }
    })
  },

  //获取当前用户信息，比如:余额
  getUserInfo: function (that) {
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/userinfo/getUserInfo',
      method: "GET",
      data:{
        openid:wx.getStorageSync("openid")
      },
      success: function (res) {
        console.log(res);
        if(res.data.state == 200){
          that.setData({
            user: res.data.data
          });
        }else{
          ////提示信息，或跳转到登陆
          app.btnLogin(res.data);
        }
      }
    })
  },

  //用户下拉动作
  onPullDownRefresh: function () {
    var that = this;

    //获取当前用户信息，比如:余额
    that.getUserInfo(that);

    //下拉完成后执行回退
    wx.stopPullDownRefresh();
  },
})