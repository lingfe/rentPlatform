// pages/indexTo/yuYue/yuYue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yuyue_caidan:[
      { img_url: "http://img0.imgtn.bdimg.com/it/u=3598093799,2587685729&fm=26&gp=0.jpg", name:"剪发预约"},
      { img_url: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3879609563,1970982058&fm=26&gp=0.jpg", name:"洗车(到店/上门)预约"},
      { img_url: "http://img2.imgtn.bdimg.com/it/u=1302683880,3693782916&fm=26&gp=0.jpg", name:"看病预约"},
      { img_url: "http://pic.yupoo.com/lingfe/09c57752/c518bc6e.png", name:"服装上门定制预约"},
      { img_url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1628288707,3887361580&fm=26&gp=0.jpg", name: "垃圾上门回收预约" },
      { name: "宠物洗澡/寄养预约",img_url:"http://img2.imgtn.bdimg.com/it/u=1944903665,1677524973&fm=11&gp=0.jpg"}
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //提示
    wx.showModal({
      title: '预约的好处',
      showCancel:false,
      content: '1.无需排队，完全掌控时间。\n2.提前为您准备详尽的处理方案，提供快捷优质的服务',
    });
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