//index.js
//获取应用实例
 var app = getApp();

Page({
  data: {
    indexmenu: [],
    imgUrls: []
  },

  //加载
  onLoad: function (options) {
    var that=this;
    //生命周期函数--监听页面加载
    that.fetchData();
    //get分类菜单
    that.getWhereSuperiorId(that);
    //get轮播图图片和属性zber_sys/lbt_attribute/getLbtAttributeInfo?state=1
    that.getLbtAttributeInfo(that);
  },

  //get轮播图图片和属性
  getLbtAttributeInfo:function(that){
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/lbt_attribute/getLbtAttributeInfo',
      method: "POST",
      header:{
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data:{
        setId: 0,//分类菜单id,项目id，其他id。如果=0，则表示最顶级，也就是服务菜单的轮播图属性
      },
      success: function (res) {
        console.log(res);
        if (res.data.state == 200) {
          that.setData({ lbt_attribute: res.data.data.lbt_attribute });
        }else{
          app.showModel(res.data.msg);
        }
      }
    })
  },

  //get分类菜单
  getWhereSuperiorId:function(that){
    wx.request({
      url: app.config.zberPath_web +'zber_sys/type_menu/getWhereSuperiorId',
      method:"POST",
      success:function(res){
        console.log(res);
        if(res.data.state == 200){
          that.setData({type_menu:res.data.data});
        }
      }
    })
  },

  fetchData: function () {
    this.setData({
      indexmenu: [
        {
          'icon': '/assets/images/ico/ico_menu/icon_01.png',
          'text': '官方闪租',
          'url': '/pages/index/index'
        },
        {
          'icon': '/assets/images/ico/ico_menu/icon_01.png',
          'text': '新鲜野货',
          'url': '/pages/indexTo/yeHuo/yeHuo'
        },
        {
          'icon': '/assets/images/ico/ico_menu/icon_01.png',
          'text': '生活预约',
          'url': '/pages/indexTo/yuYue/yuYue'
        },
        {
          'icon': '/assets/images/ico/ico_menu/icon_01.png',
          'text': '餐饮食品',
          'url': '/pages/indexTo/yuYue/yuYue'
        },
        {
          'icon': '/assets/images/ico/ico_menu/icon_01.png',
          'text': '特殊宠物',
          'url': '/pages/indexTo/yeHuo/yeHuoList/yeHuoList?category=4'
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
