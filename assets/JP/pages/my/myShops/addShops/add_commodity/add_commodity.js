// pages/my/myShops/addShops/add_commodity/add_commodity.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //表单
    form: {
      shopsChooseType_tabs_id: null,//商铺选购tabs分类菜单id
      commodityName: null,//商品名称
      img:null,//图片
      creator: wx.getStorageSync("openid"),
      shops_recommend: null,//商铺推荐,表示用于商铺推荐的商品(商铺id)，最多推荐3件商品。
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (!app.checkInput(options.id)) {
      that.setData({
        "form.shopsChooseType_tabs_id": options.id,
        shops_id:options.shops_id,
      });
    } else {
      app.showModal("请先选择一个商铺选购tabs分类菜单，再点击添加!");
      wx.navigateBack();
    }
  },

  //表单提交
  bindFormSubmit: function (e) {
    var that = this;
    var form = that.data.form;
    //验证非空
    if (app.checkInput(e.detail.value.commodityName)) {
      app.showToast("名称不能为空!", "none");
      return;
    } else {
      form.commodityName = e.detail.value.commodityName;
    }
    
    //是否是商铺推荐
    if (e.detail.value.shops_recommend == 1) {
      form.shops_recommend=that.data.shops_id;
    }

    //发起请求
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/shops_commodity/save',
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: form,
      success: function (res) {
        console.log(res);
        app.showModal(res.data.msg);
        if (res.data.state == 200) {
          //得到打开的页面
          var pages = getCurrentPages();
          var currPage = pages[pages.length - 1];  //当前页面
          var prevPage = pages[pages.length - 2]; //上一个页面

          //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
          prevPage.setData({
            shops_commodity_list: res.data.data
          })
          //返回上一页
          wx.navigateBack();
        }
      }
    })
  },

  //删除图片
  bindtapImageDelete: function (e) {
    var that = this;
    that.setData({
      "form.img": null
    });
  },

  //获取 图片
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          "form.img": res.tempFilePaths[0],
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