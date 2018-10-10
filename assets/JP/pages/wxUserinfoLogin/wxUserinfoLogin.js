/**  
 *   作者:  lingfe 
 *   时间:  2017-7-26
 *   描述:  微信登录
 * 
 * */
var app=getApp();

Page({

  data:{
    userInfo:{}
  },

  //获取用户信息,button
  getUserInfo: function (e) {
    var that=this;
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    //保存到缓存
    wx.setStorageSync("userInfo", e.detail.userInfo);
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })

    //1.请求登陆
    //调用登录接口
    wx.login({
      success: function (logRes) {
        //url 获取用户信息以及openid,http://192.168.3.4:8020/api/UserLogin/wechatLogin
        var url = app.config.zberPath_web +'zber_sys/userinfo/save';
        console.log(logRes);
        //参数
        var data = {
          code: logRes.code,
          username: e.detail.userInfo.nickName,
          avatar: e.detail.userInfo.avatarUrl
        }

        //发送请求
        app.request.reqGet(url,  data,function(res){
          console.log(res);
          //得到token
          var openid = res.data.data.openid;
          //储存到app
          app.globalData.openid = openid;
          app.globalData.userInfo = res.data.data;
          //存到缓存中
          wx.setStorageSync("openid", app.globalData.openid);
          wx.setStorageSync("userInfo", app.globalData.userInfo);

          //验证是否已经绑定手机号码0(未设置), 1(已设置)
          var mobile = res.data.data.mobile;
          if (mobile == '' || mobile == null ){
            wx.showModal({
              title: '提示',
              content: '发现您还没绑定手机号，是否绑定？',
              confirmText: "是",
              cancelText: "否",
              success: function (res) {
                if (res.confirm) {
                  //跳转页面
                  wx.navigateTo({
                    url: '/pages/bindingPhone/bindingPhone',
                  });
                }else{
                  //返回上一页
                  wx.navigateBack();
                }
              }
            });
          }else{
            //返回上一页
            wx.navigateBack();
          }

        },function (res) {
          console.log(res);
        });
      }, fail: function (res) {
        console.log(res);
      }
    });
  },
})