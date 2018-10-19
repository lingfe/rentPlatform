// pages/indexTo/restaurantFood/restaurantFood.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: -1,         //tab切换下标
    activeIndex_to: -1,
    ax:1,

    //商铺商品
    commodity_list: [{
      img: "https://p0.meituan.net/deal/3f47cdea4688224ddc30a1047e87472b93015.jpg",
      commodityName: "点击选购分类菜单得到商品信息!",
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.data.id=options.id;
    //根据商铺id得到商铺详情
    that.getWhereId_detail(that);
  },

  //根据商铺id得到商铺详情
  getWhereId_detail:function(that){
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/apply_shops/getWhereId_detail',
      method: "get",
      data:{
        id:that.data.id,
        openid:wx.getStorageSync("openid")
      },
      success:function(res){
        if(res.data.state=200){
          that.setData({
            //推荐商品
            commodity_list:res.data.data.commodity_list,
            //基本信息
            basicInfo:res.data.data
          });
        }
      }
    })
  },
  
  //拨打电话号码
  bodaPhone: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.id,
    });
  },

  //tabs菜单导航,点击切换
  tabClick: function (e) {
    var that = this;
    var name = e.currentTarget.dataset.name;

    //设置
    that.setData({
      activeIndex: e.currentTarget.id
    });
  },

  //根据根据shopsChooseType_tabs_id得到商品集合
  getWhereShopsChooseType_tabs_id: function (id) {
    var that = this;
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/shops_commodity/getWhereShopsChooseType_tabs_id',
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        shopsChooseType_tabs_id: id,
      },
      success: function (res) {
        console.log(res);
        that.setData({
          commodity_list: res.data.data
        });
      }
    })
  },

  //选购tabs分类菜单，点击切换
  switchRightTab(e) {
    var that = this;

    //根据根据shopsChooseType_tabs_id得到商品集合
    var id = e.currentTarget.id;
    that.getWhereShopsChooseType_tabs_id(id);

    //设置
    that.setData({
      shopsChooseType_tabs_id: id,
      activeIndex_to: e.currentTarget.dataset.index
    });
  },

})