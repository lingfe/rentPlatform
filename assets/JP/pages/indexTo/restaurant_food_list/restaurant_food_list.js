// pages/indexTo/restaurant_food_list/restaurant_food_list.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      /**餐饮食品 start */
      {
        model: 4, //布局model4
        sourceLog: "https://p0.meituan.net/deal/3f47cdea4688224ddc30a1047e87472b93015.jpg",//log
        title: "A谯家大头炮特色烤鱼",
        is_subscribe: 1,//是否可以预约0=否，不可以，1=是,可以。
        is_follow: 1,//是否显示预约0=否，不显示，1=是,显示。
        sellNum: 188,//销售数量
        charging_fee: 20,//起送费
        distribution_fee: 2,//配送费
        category: 5,//烤鱼
        //推荐商品
        tuijian_list: [
          {
            img: "https://p0.meituan.net/shaitu/59178c00c2bea2254344374ce67447512265801.jpg@55w_55h_1e_1c",//图片
            title: "烤鱼草鱼1条3斤左右",//标题
            sellNum: 188,//销售数量
            likeNum: 55,//喜欢人数
            price: 88,//价格
          }, {
            img: "https://p0.meituan.net/shaitu/59178c00c2bea2254344374ce67447512265801.jpg@55w_55h_1e_1c",//图片
            title: "烤鱼江团1条3斤左右",//标题
            sellNum: 188,//销售数量
            likeNum: 55,//喜欢人数
            price: 98,//价格
          }
        ],
      },
    /**餐饮食品 end */
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var that=this;
     that.setData({
       type_menu_id: options.typeMenu_id,
     });

     //根据分类菜单id查询，all商铺
    that.getWhere_type_menu_id(that);
  },

  //根据分类菜单id查询，all商铺
  getWhere_type_menu_id:function(that){
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/apply_shops/getWhere_type_menu_id',
      method:"get",
      data:{
        type_menu_id: that.data.type_menu_id,
      },
      success:function(res){
        console.log(res);
        that.setData({
          list:res.data.data
        });
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