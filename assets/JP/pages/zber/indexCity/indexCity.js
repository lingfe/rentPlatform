/**  
 *   作者:  lingfe 
 *   时间:  2017-10-9
 *   描述:  首页城市选择
 * 
 * */
//获取应用实例
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 2,         //tab切换下标
    sliderOffset: 0,        //坐标x
    sliderLeft: 0,          //坐标y
    addressInfo:"定位中..",
    ad_info: ["成都", "重庆", "贵阳"],   //城市信息
  },

  //tab切换
  tabClick: function (e) {
    var that = this;
    that.setData({ sliderOffset: e.currentTarget.offsetLeft, activeIndex: e.currentTarget.id });
    //保存地理位置
    var city = e.currentTarget.dataset.shortname;
    //得到打开的页面
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];  //当前页面
    var prevPage = pages[pages.length - 2]; //上一个页面

    wx.setStorageSync("city", city);
    //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
    prevPage.setData({
      city: city,
    })
    //返回上一页
    wx.navigateBack();
  },

  //页面加载
  onLoad: function (options) {
    var that=this;
    wx.showModal({
      title: "业务正在升级,更多城市敬请期待!",
      showCancel: false,
    });

    var city = wx.getStorageSync("city");
    for(var k=0;k<that.data.ad_info.length;++k){
      if(that.data.ad_info[k]==city){
        that.setData({
          activeIndex:k,
        });
        break;
      }
    }
  },
})