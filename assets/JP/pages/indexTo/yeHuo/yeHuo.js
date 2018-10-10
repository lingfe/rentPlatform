/**  
 *   path:  pages/indexTo/yeHuo/yeHuo.wxss   
 *   作者:  lingfe 
 *   时间:  2018-09-26
 *   描述:  野货.
 * 
 * */
//获取应用实例
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    lbt_images:[
      { img_url: "http://108108byg.com/uploads/180824/3-1PR4120012W9.jpg", name: "八月瓜", 
        navigator:"/pages/indexTo/yeHuo/yeHuoList/yeHuoList?category=2"},
      {
        img_url: "http://108108byg.com/uploads/allimg/180417/1-1P41H12I5-51.jpg", name: "牛纳尔.羊奶果",
        navigator: "/pages/indexTo/yeHuo/yeHuoList/yeHuoList?category=6"
      },
      { img_url:"http://img2.imgtn.bdimg.com/it/u=2784462959,72305985&fm=26&gp=0.jpg",name:"蘑菇",
        navigator: "/pages/indexTo/yeHuo/yeHuoList/yeHuoList?category=7"}      
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      superiorId: options.typeMenu_id
    });

    //get分类菜单
    that.getWhereSuperiorId(that);
    //get轮播图图片和属性
    that.getLbtAttributeInfo(that);
  },

  //get轮播图图片和属性
  getLbtAttributeInfo: function (that) {
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/lbt_attribute/getLbtAttributeInfo',
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        setId: that.data.superiorId,//分类菜单id,项目id，其他id。如果=0，则表示最顶级，也就是服务菜单的轮播图属性
      },
      success: function (res) {
        console.log(res);
        if (res.data.state == 200) {
          that.setData({ lbt_attribute: res.data.data.lbt_attribute });
        } else {
          app.showModal(res.data.msg);
        }
      }
    })
  },

  //get分类菜单
  getWhereSuperiorId: function (that) {
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/type_menu/getWhereSuperiorId',
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        superiorId: that.data.superiorId,//上级id，根据此id得到菜单
      },
      success: function (res) {
        console.log(res);
        if (res.data.state == 200) {
          that.setData({ type_menu: res.data.data });
        }
      }
    })
  },

})