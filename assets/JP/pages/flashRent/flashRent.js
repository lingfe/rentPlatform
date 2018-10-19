var Util = require("../../utils/util");

//获取应用实例
var app = getApp();

Page({
  data: {
    model:0,
    activeIndex:-1,
    tabs_list:[
      { tabs_name:"新鲜野果",},
      {tabs_name:"官方直租"},
      {tabs_name:"特殊宠物",},
      {tabs_name:"餐饮食品"},
      {tabs_name:"生活预约"}
    ],
    isPrices:false,
    priceIndex:0,
    PriceRange: ['全部', '0 - 1 万', '1 - 5 万', '5 - 50 万', '50万+'],
    lists:app.localData.tuijian_list,
    //城市
    city:wx.getStorageSync("city"),

    //数据,初始化
    lists:[],
    //分页参数，初始化
    pageIndex:1,
    pageNum:3,
  },


  //加载
  onLoad:function(options){
    var that=this;
    //get推荐数据
    that.getRecommend(that);
  },

  //get推荐数据
  getRecommend:function(that){
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/recommend/get',
      method:"get",
      data:{
        pageIndex:that.data.pageIndex,
        pageNum:that.data.pageNum
      },
      success:function(res){
        console.log(res);
        var data = res.data.data.list;
        that.setData(
          {
            lists: that.data.lists.concat(data)
          }
        );
      }
    });
  },

  //初始化设置
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '来自周边儿推荐'
    })
  },

  //得到地址，位置信息
  getAddress: function (e) {
    var that = this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        console.log(res);
        var latitude = res.latitude
        var longitude = res.longitude

        wx.chooseLocation({
          success: function (res) {
            console.log(res);
            //处理地址信息
            var address = res.address;

            //省
            var province_index = address.indexOf("省") + 1
            var province = address.substring(0, province_index);

            //市
            var city_index = address.indexOf("市") + 1;
            var city = address.substring(province_index, city_index);

            //区
            var area_index = address.indexOf("区") + 1;
            var area = address.substring(city_index, area_index);

            wx.setStorageSync("city", city);
            that.setData({
              city: city,
            });
          }
        })
      }
    })
  },

  //是否显示选择价格
  bindtapButton: function (e) {
    this.setData({
      isPrices: this.data.isPrices == false ? true : false
    });
  },

  // 对数据进行提取
  dataRead: function (data) {
    // 用于存放提取后的数据
    var dataArr = [];
    data.forEach(function (item) {
      // 用于存放单条团数据
      var groupData = {};
      groupData.groupId = item.groupId;
      groupData.goodsImg = item.goodsImg;
      groupData.goodsTitle = item.goodsTitle;
      groupData.groupSize = item.groupSize;
      groupData.groupPrice = item.groupViewPrice;
      groupData.lessNum = item.lessNum;
      groupData.groupEndTime = (item.restTime) / 1000;
      groupData.displayTime = "";
      groupData.userLst = item.userLst;

      dataArr.push(groupData);
    });
    return dataArr;
  },

  // 倒计时方法
  countDown: function (listData, time, i) {
    var self = this, interval = "cleartime" + i;
    if (time != 0) {
      interval = setInterval(function () {
        listData[i].groupEndTime = time - 1;
        listData[i].displayTime = Util.formatTime(listData[i].groupEndTime);
        self.setData({
          lists: listData
        })
        if (time <= 0) {
          clearInterval(interval);
        }
      }, 1000)
    }
  },

  //选择参数
  bindtapPrices(e){
    this.setData({ priceIndex: e.currentTarget.id });
  },

  //tab切换
  tabClick: function (e) {
    var that=this;
    var name=e.currentTarget.dataset.name;

    //判断模块
    if(name == "推荐"){
      //get推荐数据
      that.getRecommend(that);
    }

    that.setData({ 
      activeIndex: e.currentTarget.id,
      //数据,初始化
      lists: [],
      //分页参数，初始化
      pageIndex: 1,
      pageNum: 3,
    });
  },

  //分享
  onShareAppMessage: function (e) {
    return {
      title: '周边儿~',
      desc: '关注您的生活!',
      path: '/pages/indexTo/indexTo?id=1001'
    }
  },

  //用户下拉动作
  onPullDownRefresh: function (e) {
    var that = this;
    that.setData({
      //数据,初始化
      lists: [],
      //分页参数，初始化
      pageIndex: 1,
      pageNum: 3,  
    });

    //判断模块
    if (that.data.activeIndex == -1) {
      //get推荐数据
      that.getRecommend(that);
    }

    //下拉完成后执行回退
    wx.stopPullDownRefresh();
  },

  //页面上拉触底事件的处理函数
  onReachBottom: function (e) {
    var that = this;
    var num = that.data.pageIndex;
    num++;
    that.setData({
      pageIndex: num,
    });

    //判断模块
    if (that.data.activeIndex == -1) {
      //get推荐数据
      that.getRecommend(that);
    }

    //提示
    wx.showToast({
      title: '正在加载..',
      icon: 'loading',
      duration: 2000,
    });
  },

})