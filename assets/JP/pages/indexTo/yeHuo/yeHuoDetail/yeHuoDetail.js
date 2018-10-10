// pages/indexTo/yeHuo/yeHuoDetail/yeHuoDetail.js
/**  
 * 作者: lingfe
  * 时间: 2017 - 12 - 7
  * 描述: 众筹项目详情_合伙创业
  * 
 **/
//获取应用实例
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ax:0,//0=不喜欢,1=喜欢
    activeIndex: 0,         //tab切换下标
    sliderOffset: 0,        //坐标x
    sliderLeft: 0,          //坐标y

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.setData({id:options.id});

    //根据项目id得到信息
    that.getWhereId(that);
    //get轮播图图片和属性
    that.getLbtAttributeInfo(that);
    //获取用户是否喜欢该项目
    that.getUserLike(that);
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
        state: 4,//状态,0=停用,1=首页，2=官方闪租,3=新鲜野货，4=项目详情
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

  //根据项目id得到信息
  getWhereId:function(that){
    wx.request({
      url: app.config.zberPath_web +'zber_sys/release_info/getWhereId',
      method:"get",
      data:{
        id:that.data.id,
        openid: wx.getStorageSync("openid")
      },
      success:function(res){
        console.log(res);
        if(res.data.state==200){
          var releaseInfo = res.data.data;
          
          //tabs内容处理
          var info = releaseInfo.tabs_list;
          for(var i=0;i<info.length;i++){
            var content = info[i].content;
            if (!app.checkInput(content)){
              content= JSON.parse(content);
            }
            info[i].content =content;
          }

          //设置tab
          var sliderWidth = 50;
          wx.getSystemInfo({
            success: function (res) {
              that.setData({
                releaseInfo: releaseInfo,
                info: info,
                sliderLeft: (res.windowWidth / releaseInfo.tabs_list.length - sliderWidth) / 2,
                sliderOffset: res.windowWidth / releaseInfo.tabs_list.length * that.data.activeIndex
              });
            }
          });

        }else{
          app.showModal(res.data.msg);
        }
      }
    })
  },

  //获取用户是否喜欢该项目
  getUserLike:function(that){
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/user_like/get',
      method: "Post",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        project_id: that.data.id,
        openid: wx.getStorageSync("openid")
      },
      success: function (res) {
        console.log(res);
        if (res.data.state == 200) {
          that.setData({
            ax: res.data.data.state
          });
        } else {
          app.showModal(res.data.msg);
        }
      }
    })
  },


  //设定该项目是否喜欢
  bindtabAX:function(e){
    var that=this;
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/user_like/get_or_save',
      method: "Post",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        project_id: that.data.id,
        openid: wx.getStorageSync("openid")
      },
      success: function (res) {
        console.log(res);
        if (res.data.state == 200) {
          that.setData({
            ax: res.data.data.state
          });
        } else {
          app.showModal(res.data.msg);
        }
      }
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

  //分享次数+1
  setUserShare(that){
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/user_share/save',
      method: "Post",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        project_id: that.data.id,
        openid: wx.getStorageSync("openid")
      },
      success:function(res){
        console.log(res);
        app.showModal(res.data.msg);
      }
    })
  },

  /**
 * 用户点击右上角分享
 */
  onShareAppMessage: function (res) {
    var that=this;
    if (res.from === 'button') { 
      console.log("来自页面内转发按钮"); 
      console.log(res.target); 
      that.setUserShare(that);
    } else { 
      console.log("来自右上角转发菜单")
    }

    return {
      title: '详情',
      desc: "" + this.releaseInfo,
      path: '/pages/indexTo/yeHuo/yeHuoList/yeHuoDetail/yeHuoDetail?id=' + this.data.id,
      success: (res) => {
        console.log("转发成功", res);
        that.setUserShare(that);
      },
    }
  }
})