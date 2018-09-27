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
    that.getis_bank(that);

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

  //获取爱心统计信息
  gethelpInfo: function (that) {
    //url
    var url = app.config.dszjPath_web + "api/User/helpInfo";
    //请求头
    var header = {
      Token: wx.getStorageSync("token"),
    };
    //参数
    var data = {};

    //发送请求
    app.request.reqPost(url, header, data, function (res) {
      console.log(res);
      if (res.data.code == "401") {
        //验证状态
        app.btnLogin(res.data.code);
        return;
      }
      //设置数据，提示框
      that.setData({
        helpInfo: res.data.data
      });
    }, function (res) {
      console.log(res);
    });
  },

  //获取当前用户信息，比如:余额
  getUserInfo: function (that) {
    wx.request({
      url: app.config.dszjPath_web + 'api/User/info',
      method: "GET",
      header: {
        Token: wx.getStorageSync("token")
      },
      success: function (res) {
        console.log(res);
        that.setData({
          user: res.data.data
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    //获取当前用户信息，比如:余额
    that.getUserInfo(that);
    //获取爱心统计信息
    that.gethelpInfo(that);
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