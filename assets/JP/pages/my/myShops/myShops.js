// pages/my/merchantEntrance/Merchant entrance.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    ////根据商铺getWhereOpenidId得到商铺信息
    that.getWhereOpenidId(that);
  },

  //根据商铺getWhereOpenidId得到商铺信息
  getWhereOpenidId: function (that) {
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/apply_shops/getWhereOpenid',
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        openid:wx.getStorageSync("openid")
      },
      success: function (res) {
        console.log(res);
        if (res.data.state == 200) {
          var list = res.data.data;
          if(!app.checkInput(list)){
            that.setData({
              list: list
            });
          }else{
            app.showModal("您还没有商铺，创建一个吧!");
          }
        }else{
          app.showModal(res.data.msg);
        }
      }
    });
  },
})