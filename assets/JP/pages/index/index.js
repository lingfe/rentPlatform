//index.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    //向模板传入数据
    // 轮播
    info: {
      images: [
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1519751787,2797767522&fm=27&gp=0.jpg' ,
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1014232293,2284254085&fm=27&gp=0.jpg' ,
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=177115290,3045947945&fm=27&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681281193,2494981497&fm=200&gp=0.jpg' ,
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2826092681,3423904438&fm=27&gp=0.jpg' ,
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=373006437,3401320826&fm=27&gp=0.jpg' ,
      ],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1200,
      //分类菜单
      navs: [
        {
          image: 'https://www.easyicon.net/api/resizeApi.php?id=539128&size=128',
          text: '房源',
          url: '/pages/index/room/room',
        }, {
          image: 'https://www.easyicon.net/api/resizeApi.php?id=1131628&size=128',
          text: '渔具',
          navigator: "/pages/indexTo/yeHuo/yeHuoList/yeHuoList?category=1"
        }, {
          image: 'https://www.easyicon.net/api/resizeApi.php?id=26029&size=128',
          text: '游戏'

        }, {
          image: 'https://www.easyicon.net/api/resizeApi.php?id=1181411&size=128',
          text: '其他'
        }
      ],
      items: [
        { image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3274478057,3381509204&fm=27&gp=0.jpg' },
        { image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1519751787,2797767522&fm=27&gp=0.jpg' },
        { image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1014232293,2284254085&fm=27&gp=0.jpg' },
        { image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=177115290,3045947945&fm=27&gp=0.jpg' },
        { image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681281193,2494981497&fm=200&gp=0.jpg' },
        { image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2826092681,3423904438&fm=27&gp=0.jpg' },
        { image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=373006437,3401320826&fm=27&gp=0.jpg' },
      ]
    },
  },
  

  //加载
  onLoad: function(options) {
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
      data:{
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
