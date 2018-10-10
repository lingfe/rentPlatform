// updatePhone.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    second: 60,       //60秒
    selected: false,  //隐藏/显示
    selected1: true,//隐藏/显示
    bg:null,
    phone:null,
    yzm:null
  },

  //电话号码
  inputTypingPhone: function (e) {
    var that = this
    that.setData({ phone: e.detail.value });
    if (!app.checkInput(that.data.phone) && !app.checkInput(that.data.yzm)) {
      that.setData({
        bg: "bg"
      });
    }
  },

  //验证码，
  inputTypingYZM: function (e) {
    var that=this;
    that.setData({ yzm: e.detail.value });
    
    if (!app.checkInput(that.data.phone) && !app.checkInput(that.data.yzm)){
      that.setData({
        bg:"bg"
      });
    }
  },

  //加载
  onLoad: function () {
    var that = this;
    var user = wx.getStorageSync('user');
    that.setData({
      user: user
    });
  },

  //修改电话号码
  bindtapUpdatePhone: function (e) {
    var that = this;
    //验证电话号码
    if (app.checkInput(that.data.phone)) {
      wx.showToast({ title: "请输入电话号码!", icon: 'none', duration: 2000 });
      return;
    }
    //验证验证码
    if (app.checkInput(that.data.yzm)) {
      wx.showToast({ title: "请输入验证码!", icon: 'none', duration: 2000 });
      return;
    }

    //3.验证绑定手机号短信验证码，得到令牌
    wx.request({
      url: app.config.dszjPath_web + "api/User/verifyMobileCode",
      header: {
        Token: wx.getStorageSync('token')
      },
      data: {
        code: that.data.yzm,
        mobile: that.data.phone,
      },
      method:"GET",
      success:function(res1){
        console.log(res1);
        if(res1.data.code == 1){

          //4.绑定手机号
          wx.request({
            url: app.config.dszjPath_web +"api/User/bindingMobile",
            data:{
              mobile:that.data.phone,
              access:res1.data.data,
              code:that.data.yzm
            },
            header:{
              Token:wx.getStorageSync('token'),
            },
            method:"POST",
            success:function(res2){
              console.log(res2);
              if(res2.data.code == 1){
                app.showToast(res2.data.msg,"none");
              }

              //返回上一个的上一个页面
              wx.navigateBack({
                delta: 2
              })
            }
          })

        }
      }
    })
  },

  //获取验证码
  getphone: function (e) {
    var that = this;
    if (app.checkInput(that.data.phone)) {
      wx.showToast({ title: "请输入电话号码!", icon: 'none', duration: 2000 });
      return;
    }
    that.setData({
      selected: true,
      selected1: false,
    });
    //冷冻
    countdown(that);

    //1.检查手机号是否被使用
    wx.request({
      url: app.config.dszjPath_web + 'api/User/checkMobile',
      method:"POST",
      header:{
        Token: wx.getStorageSync('token'),
      },
      data:{
        mobile: that.data.phone,
      },
      success:function(res1){
        console.log(res1);
        if(!res1.data.data){
          //2.像手机号发送验证码
          wx.request({
            url: app.config.dszjPath_web + "api/User/sendMobileCode",
            data: {
              mobile: that.data.phone,
            },
            header: {
              Token: wx.getStorageSync('token'),
            },
            method: "POST",
            success: function (res2) {
              console.log(res2);
            }
          });
        }
      }
    });

  },
});

//验证码
function countdown(that) {
  var second = that.data.second;
  if (second == 0) {
    that.setData({
      selected: false,
      selected1: true,
      second: 60,
    });
    return;
  }
  var time = setTimeout(function () {
    that.setData({
      second: second - 1
    });
    countdown(that);
  }, 1000)
}
