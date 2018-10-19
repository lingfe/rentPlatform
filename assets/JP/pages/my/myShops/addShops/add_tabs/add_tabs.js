// pages/my/myShops/addShops/add_tabs/add_tabs.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //表单
    form: {
      project_id: null,//商铺id
      tabs_name: null,//名称
      creator: wx.getStorageSync("openid"),
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (!app.checkInput(options.shops_id)) {
      that.setData({
        "form.project_id": options.shops_id,
      });
    } else {
      wx.showModal({
        title: '提示',
        content: '请先保存基本信息后再来添加',
        success: function (res) {
          wx.navigateBack();
        }
      })
    }
  },

  //表单提交
  bindFormSubmit: function (e) {
    var that = this;
    var form = that.data.form;
    //验证非空
    if (app.checkInput(e.detail.value.tabs_name)) {
      app.showToast("名称不能为空!", "none");
      return;
    } else {
      form.tabs_name = e.detail.value.tabs_name;
    }

    //发起请求
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/tabs/save',
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: form,
      success: function (res) {
        console.log(res);
        app.showModal(res.data.msg);
        if (res.data.state == 200) {
          //得到打开的页面
          var pages = getCurrentPages();
          var currPage = pages[pages.length - 1];  //当前页面
          var prevPage = pages[pages.length - 2]; //上一个页面

          //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
          prevPage.setData({
            info: res.data.data
          })
          //返回上一页
          wx.navigateBack();
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})