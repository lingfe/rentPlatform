//index.js
//获取应用实例
// var app = getApp();
Page({
  data: {
    indexmenu: [],
    imgUrls: []
  },
  onLoad: function () {
    //生命周期函数--监听页面加载
    this.fetchData();
  },

  fetchData: function () {
    this.setData({
      indexmenu: [
        {
          'icon': '/assets/images/ico/ico_menu/icon_01.png',
          'text': '官方闪租',
          'url': 'pages/index/index'
        },
        {
          'icon': '/assets/images/ico/ico_menu/icon_01.png',
          'text': '新鲜野货',
          'url': 'pages/indexTo/yeHuo/yeHuo'
        },
        {
          'icon': '/assets/images/ico/ico_menu/icon_01.png',
          'text': '生活预约',
          'url': 'pages/indexTo/yuYue/yuYue'
        },
        {
          'icon': '/assets/images/ico/ico_menu/icon_01.png',
          'text': '餐饮食品',
          'url': 'pages/indexTo/yuYue/yuYue'
        },
        {
          'icon': '/assets/images/ico/ico_menu/icon_03.png',
          'text': '企业合作',
          'url': 'service'
        },
        {
          'icon': '/assets/images/ico/ico_menu/icon_05.png',
          'text': '商家合作',
          'url': 'conference'
        },
        {
          'icon': '/assets/images/ico/ico_menu/icon_07.png',
          'text': '个人资源',
          'url': 'resource'
        },
        {
          'icon': '/assets/images/ico/ico_menu/icon_09.png',
          'text': '疑问解答',
          'url': 'question'
        },
        {
          'icon': '/assets/images/ico/ico_menu/icon_11.png',
          'text': '预约服务',
          'url': 'pages/indexTo/yuYue/yuYue'
        },
        {
          'icon': '/assets/images/ico/ico_menu/icon_13.png',
          'text': '入驻申请',
          'url': 'apply'
        }
      ],
      imgUrls: [
        '/assets/images/banner_02.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ]
    })
  },
  changeRoute: function (url) {
    wx.navigateTo({
      url: `../${url}/${url}`
    })
  },
  onReady: function () {
    //生命周期函数--监听页面初次渲染完成
    // console.log('onReady');
  },
  onShow: function () {
    //生命周期函数--监听页面显示
    // console.log('onShow');
  },
  onHide: function () {
    //生命周期函数--监听页面隐藏
    // console.log('onHide');
  },
  onUnload: function () {
    //生命周期函数--监听页面卸载
    // console.log('onUnload');
  },
  onPullDownRefresh: function () {
    //页面相关事件处理函数--监听用户下拉动作
    // console.log('onPullDownRefresh');
  },
  onReachBottom: function () {
    //页面上拉触底事件的处理函数
    // console.log('onReachBottom');
  }
})
