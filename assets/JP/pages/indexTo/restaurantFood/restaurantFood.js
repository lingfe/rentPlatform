// pages/indexTo/restaurantFood/restaurantFood.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: -1,         //tab切换下标
    sliderOffset: 0,        //坐标x
    sliderLeft: 0,          //坐标y
    activeIndex: -1,         //tab切换下标   
    activeIndex_to: -1,
    ax:1,

    //商铺商品
    shops_commodity_list: [{
      img: "https://p0.meituan.net/deal/3f47cdea4688224ddc30a1047e87472b93015.jpg",
      commodityName: "测试测试测试测试测试测试测试测试测试测试测试测试",
    }],

    //基本信息以及商铺详情信息
    basicInfo: {
      logo: "http://108108byg.com/uploads/allimg/180202/3-1P202210558.jpg",
      shopsName: "测试名称测试名称测试名称",
      address: "测试地址测试地址测试地址测试地址测试地址",
      businessHours: "测试:09:00-19:00",
      contactNumber: "测试:08787-83573472",
      images: [
        "http://108108byg.com/skin/images/logo.png",
        "http://108108byg.com/skin/images/logo.png",
        "http://108108byg.com/skin/images/logo.png",
        "http://108108byg.com/skin/images/logo.png"
      ],
      //商铺选购分类tabs菜单
      shopsChooseType_tabs_list: [
        {
          id: 1,
          tabs_name: "测试数据"
        },
        {
          id: 2,
          tabs_name: "测试数据"
        }
      ],
      //用户信息
      user_info: {
        avatar: "/assets/images/ico/ico_menu/icon_01.png",
        username: "lingfe",
      },
      //标签
      lable_list: ["1人喜欢", "0次浏览", "0次转发"],
      //tabs内容菜单导航
      info: [],
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //设置tab
    var sliderWidth = 50;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.info.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.info.length * that.data.activeIndex
        });
      }
    });
  },
  
  //拨打电话号码
  bodaPhone: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.id,
    });
  },

  //tab点击切换
  tabClick: function (e) {
    var that = this;
    var name = e.currentTarget.dataset.name;

    //设置
    that.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  //点餐tabs
  switchRightTab(e){
    var that = this;

    //设置
    that.setData({
      activeIndex_to: e.currentTarget.id
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