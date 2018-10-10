// pages/my/myShops/addShops/addShops.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: wx.getStorageSync("city"),
    tabs: ["预览","基本信息","其他导航菜单内容说明"],
    tab_index: 0,
    activeIndex: -1,         //tab切换下标   
    activeIndex_to:-1,

    ax: 1,
    jia:"+",

    //商铺选购分类tabs菜单
    shopsChooseType_tabs_list: [
      {
        id: 1,
        tabs_name:"测试数据"
      },
      {
        id: 2,
        tabs_name: "测试数据"
      }
    ],

    //商铺商品
    shops_commodity_list: [{
      img: "https://p0.meituan.net/deal/3f47cdea4688224ddc30a1047e87472b93015.jpg",
      commodityName: "测试测试测试测试测试测试测试测试测试测试测试测试",
    }],

    //用户信息
    user_info: {
      avatar: "/assets/images/ico/ico_menu/icon_01.png",
      username: "lingfe",
    },

    //标签
    lable_list: ["1人喜欢", "0次浏览", "0次转发"],

    //tabs内容菜单导航
    info: [],

    //基本信息
    basicInfo: {
      logo: "http://108108byg.com/uploads/allimg/180202/3-1P202210558.jpg",
      shopsName: "测试名称测试名称测试名称",
      address: "测试地址测试地址测试地址测试地址测试地址",
      businessHours: "测试:09:00-19:00",
      contactNumber: "测试:08787-83573472",
      images: [
          "http://108108byg.com/skin/images/logo.png",
          "http://108108byg.com/skin/images/logo.png",
          "http://108108byg.com/skin/images/logo.png",
          "http://108108byg.com/skin/images/logo.png"
        ]
    },

    //布局说明
    bujusming_list: [{
      "title": "title表示标题,这是标题部分",
      "content": "content表示内容,如:八月瓜产地分布于山西、湖南、河南、陕西、安徽、浙江、江西、福建、湖北、广东、广西、四川、重庆、云南、贵州、西藏等地，其中以贵州铜仁、湖南张家界天子山景区居多，农历八月瓜熟开口，索溪峪、杨家界等山麓谷地、林缘灌木丛中野生资源丰富，为上乘野果。",
      "img": "http://108108byg.com/uploads/allimg/180202/3-1P202210558.jpg",
      "text": "img图片,这是图片说明",
      "content_Bold": "这里的内容加粗了，content_Bold",
    },{
        "content_Bold": "这里另外一个item，这里的内容也加粗了，content_Bold",
    }],


    //基本信息
    form: {
      shopsName: null,//商铺名称
      contactNumber: null,//联系电话
      address: null,//详细地址
      businessHours:null,//营业时间

      logo: null,//上传商铺logo或门面照片
      position_info: null,//位置信息
      city: wx.getStorageSync("city"),//城市
      images: [],//上传门店内外周边环境照片
      creator: wx.getStorageSync("openid"),//申请者
    },
    arr: [],                              //选择图片的数组，预留。不包含编辑之前的数据，用于组装
   
    //跳转url
    navigator:{
      add_shopsChooseType_tabs:
      "/pages/my/myShops/addShops/add_shopsChooseType_tabs/add_shopsChooseType_tabs",
      edit_shopsChooseType_tabs:
      "/pages/my/myShops/addShops/edit_shopsChooseType_tabs/edit_shopsChooseType_tabs",
      add_tabs:"/pages/my/myShops/addShops/add_tabs/add_tabs",
      edit_tabs: "/pages/my/myShops/addShops/edit_tabs/edit_tabs",
      add_commodity:"/pages/my/myShops/addShops/add_commodity/add_commodity",
      add_shops_price:"/pages/my/myShops/addShops/add_shops_price/add_shops_price",
      commodity_edit:"/pages/my/myShops/addShops/commodity_edit/commodity_edit",
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if(!app.checkInput(options.id)){
      //根据商铺id得到商铺详情
      that.getWhereId(options.id);
      //根据shops_id得到商铺选购分类tabs集合
      that.getWhereShopsId(options.id);
      //根据商铺id得到tabs导航菜单
      that.getWhereShopsId_tabsList(options.id);
    }
    //得到用户信息
    that.setData({
      id:options.id,
      user_info: wx.getStorageSync("userInfo")
    })
  },

  //根据商品id删除商品信息
  delete_commodity:function(e){
    var that=this;
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/shops_commodity/deleteWhereId',
      method: "get",
      data: {
        id: e.currentTarget.id,
      },
      success:function(res){
        app.showModal(res.data.msg);
        if(res.data.state=200){
          //根据根据shopsChooseType_tabs_id得到商品集合
          that.getWhereShopsChooseType_tabs_id(that.data.shopsChooseType_tabs_id);
        }
      }
    })
  },

  //点击商品
  commodityBtn:function(e){
    var that=this;
    that.setData({
      commodity_id:e.currentTarget.id
    });
  },

  //根据选购分类tabs菜单id删除
  bindtapDeleteShopChooseTypeTabs:function(e){
    var that=this;
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/shopsChooseType_tabs/deleteWhereId',
      method:"get",
      data:{
        id:e.currentTarget.id,
      },
      success:function(res){
        console.log(res);
        app.showModal(res.data.msg);
        if(res.data.state==200){
          //根据shops_id得到商铺选购分类tabs集合
          that.getWhereShopsId(that.data.id);
        }
      }
    })
  },

  //根据导航tabs菜单id删除
  bindtapDeleteTabs:function(e){
    var that = this;
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/tabs/deleteWhereId',
      method: "get",
      data: {
        id: e.currentTarget.id,
      },
      success: function (res) {
        console.log(res);
        app.showModal(res.data.msg);
        if (res.data.state == 200) {
          //根据商铺id得到tabs导航菜单
          that.getWhereShopsId_tabsList(that.data.id);
        }
      }
    })
  },

  //根据shops_id得到商铺选购分类tabs集合
  getWhereShopsId:function(id){
    var that = this;
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/shopsChooseType_tabs/getWhereShopsId',
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        shops_id: id
      },
      success: function (res) {
        console.log(res);
        if (res.data.state == 200) {
          that.setData({
            shopsChooseType_tabs_list: res.data.data
          });
        }else{
          app.showModal(res.data.msg);
        }
      }
    });
  },

  //根据商铺id得到tabs导航菜单
  getWhereShopsId_tabsList: function (id) {
    var that = this;
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/tabs/getWhereShops_id',
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        shops_id: id
      },
      success: function (res) {
        console.log(res);
        
        if (res.data.state == 200) {
          that.setData({
            info: res.data.data
          });
        }else{
          app.showModal(res.data.msg);
        }
      }
    });
  },

  //根据商铺id得到商铺详情
  getWhereId:function(id){
    var that=this;
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/apply_shops/getWhereId',
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        id:id
      },
      success: function (res) {
        console.log(res);
        if (res.data.state == 200) {
          that.setData({
            basicInfo:res.data.data
          });
        }else{
          app.showModal(res.data.msg);
        }
      }
    });
  },

  //表单提交
  bindFormSubmit: function (e) {
    var that = this;
    var form = that.data.form;

    //验证id是否为空，不为空就编辑
    if(!app.checkInput(e.detail.value.id)){
      form = {};
      form.id=e.detail.value.id;
      //修改人
      form.modify=wx.getStorageSync("openid");
      form.city=wx.getStorageSync("city");
      form.position_info=that.data.basicInfo.position_info;
      
    }

    //验证非空
    if (app.checkInput(e.detail.value.shopsName)) {
      app.showToast("商铺名称不能为空!", "none");
      return;
    } else if (app.checkInput(e.detail.value.businessHours)) {
      app.showToast("营业时间不能为空!", "none");
      return;
    } else if (app.checkInput(e.detail.value.address)) {
      app.showToast("详细地址不能为空!", "none");
      return;
    } else {
      form.shopsName = e.detail.value.shopsName;
      form.businessHours = e.detail.value.businessHours;
      form.contactNumber = e.detail.value.contactNumber;
      form.address = e.detail.value.address;
    }

    //发起请求
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/apply_shops/save_or_update',
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: form,
      success: function (res) {
        console.log(res);
        app.showModal(res.data.msg);
        if (res.data.state == 200) {
          that.setData({
            activeIndex:-2,
            tab_index:0,
            basicInfo: res.data.data
          });
        }
      }
    })
  },

  //导航，点击切换
  tabClick_to: function (e) {
    var that = this;
    //设置
    that.setData({
      tab_index: e.currentTarget.id,
    });
  },

  //内容菜单导航，点击切换
  tabClick: function (e) {
    var that = this;
    //设置
    that.setData({
      activeIndex: e.currentTarget.id,
    });
  },

  //根据根据shopsChooseType_tabs_id得到商品集合
  getWhereShopsChooseType_tabs_id:function(id){
    var that=this;
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/shops_commodity/getWhereShopsChooseType_tabs_id',
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        shopsChooseType_tabs_id:id,
      },
      success:function(res){
        console.log(res);
        that.setData({
          shops_commodity_list:res.data.data
        });
      }
    })
  },

  //选购tabs分类菜单，点击切换
  switchRightTab(e) {
    var that = this;
    
    //根据根据shopsChooseType_tabs_id得到商品集合
    var id=e.currentTarget.id;
    that.getWhereShopsChooseType_tabs_id(id);

    //设置
    that.setData({
      shopsChooseType_tabs_id:id,
      activeIndex_to: e.currentTarget.dataset.index
    });
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

            that.setData({
              "form.address": address,
              "form.position_info": res.name,
              city: city,
            });
          }
        })
      }
    })
  },

  //删除图片
  bindtapImageDelete: function (e) {
    var img = e.currentTarget.dataset.img;
    var that = this;
    var arr = that.data.arr;

    for (var j = 0; j < arr.length; j++) {
      if (arr[j] == img) {
        arr.splice(j, 1);
      }
    }

    that.setData({
      arr: arr
    });
  },

  //获取 图片
  chooseImage: function (e) {
    var that = this;
    if (that.data.arr.length >= 6) {
      //弹出提示
      wx.showModal({
        content: '最多只能上传6张图片！',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定');
          }
        }
      });
      return;
    }
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        var imglength = res.tempFilePaths.length + that.data.arr.length;
        if (imglength > 6) {
          //弹出提示
          wx.showModal({
            content: '总共只能上传6张图片！',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定');
              }
            }
          });
          return;
        }
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          arr: that.data.arr.concat(res.tempFilePaths)
        });
      }
    })
  },

  //图片预览
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.arr // 需要预览的图片http链接列表
    })
  },
})