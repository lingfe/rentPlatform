//index.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    //向模板传入数据
    // 轮播
    index_index_scroll_tmpl: {
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
      duration: 1200
    },
    // nav
    index_index_navs_tmpl: {
      navs: [
        {
          image: 'https://www.easyicon.net/api/resizeApi.php?id=539128&size=128',
          text: '房源',
          url:'/pages/index/room/room',
        }, {
          image: 'https://www.easyicon.net/api/resizeApi.php?id=1131628&size=128',
          text: '渔具'
        }, {
          image: 'https://www.easyicon.net/api/resizeApi.php?id=26029&size=128',
          text: '游戏'
        }, {
          image: 'https://www.easyicon.net/api/resizeApi.php?id=1181411&size=128',
          text: '其他'
        }
      ]
    },
    
    // item
    index_index_items_tmpl: {
      items: [
        { image:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3274478057,3381509204&fm=27&gp=0.jpg'},
        { image:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1519751787,2797767522&fm=27&gp=0.jpg'},
        { image:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1014232293,2284254085&fm=27&gp=0.jpg'},
        { image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=177115290,3045947945&fm=27&gp=0.jpg'},
        { image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681281193,2494981497&fm=200&gp=0.jpg'},
        { image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2826092681,3423904438&fm=27&gp=0.jpg'},
        { image:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=373006437,3401320826&fm=27&gp=0.jpg'},
      ]
    }
    
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },
  swiperchange: function(e) {
    //FIXME: 当前页码
    //console.log(e.detail.current)
  },

  onLoad: function() {
    console.log( 'onLoad' )
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  },
  go: function(event) {
    wx.navigateTo({
      url:  event.currentTarget.dataset.type
    })
  }
})
