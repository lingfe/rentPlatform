// pages/indexTo/yeHuo/yeHuoList/yeHuoList.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: app.localData.tuijian_list,
    category:0,//默认0=其他
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.setData({
      typeMenu_id: options.typeMenu_id
    }) ;
    //根据分类菜单id得到项目信息zber_sys/release_info/getWhere_TypeMenu_id?typeMenu_id=kjhkdfghsd
    that.getWhere_TypeMenu_id(that);
  },

  //根据分类菜单id得到项目信息zber_sys
  getWhere_TypeMenu_id:function(that){
    wx.request({
      url: app.config.zberPath_web +'zber_sys/release_info/getWhere_TypeMenu_id',
      method:"get",
      data:{
        typeMenu_id: that.data.typeMenu_id,
      },
      success:function(res){
        console.log(res);
        if(res.data.state == 200){
          that.setData({
            release_list: res.data.data.release_info_list
          });
        }else{
          app.showModel(res.data.msg);
        }
      }
    })
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