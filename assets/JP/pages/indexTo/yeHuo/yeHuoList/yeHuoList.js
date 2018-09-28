// pages/indexTo/yeHuo/yeHuoList/yeHuoList.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: app.localData.tuijian_list,
    varieties:0,//默认0=八月瓜
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.setData({
      varieties: options.varieties
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '八月瓜列表',
      desc: "你知道八月瓜除了好吃还有那些用处吗？",
      path: '/pages/indexTo/yeHuo/yeHuoList/yeHuoList?varieties=' + this.data.varieties
    }
  }
})