/**  
 *   path:  pages/indexTo/yeHuo/yeHuo.wxss   
 *   作者:  lingfe 
 *   时间:  2018-09-26
 *   描述:  野货.
 * 
 * */


Page({

  /**
   * 页面的初始数据
   */
  data: {
    lbt_images:[
      { img_url:"http://108108byg.com/uploads/180824/3-1PR4120012W9.jpg",name:"八月瓜"},
      { img_url:"http://img2.imgtn.bdimg.com/it/u=2784462959,72305985&fm=26&gp=0.jpg",name:"蘑菇"},
      { img_url:"http://108108byg.com/uploads/allimg/180417/1-1P41H12I5-51.jpg",name:"牛纳尔.羊奶果"}
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //关于柠檬
  bindtapGyLemon: function (e) {
    wx.navigateTo({
      url: "/pages/findPage/gyLemon/gyLemon",
    });
  },

  //积分兑换
  bindtapPoints: function (e) {
    wx.navigateTo({
      url: "/pages/findPage/myPoints/myPoints",
    })
  },

  //柠檬公益
  bindtapLemonCommonweal: function (e) {
    wx.navigateTo({
      url: "/pages/findPage/lemonCommonweal/lemonCommonweal"
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