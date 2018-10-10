// pages/my/myShops/addShops/add_commodity/set_commodity_price/set_commodity_price.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //价格单位
    price_company: app.localData.price_company,
    //表单
    form: {
      original_price: null,//原价
      present_price: null,//现价
      surplusNum: null,//剩余数量
      price_company:"份",//价格单位，默认=份
      setId: null,//商品id
      creator: wx.getStorageSync("openid"),//创建者
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (!app.checkInput(options.id)) {
      that.setData({
        "form.setId": options.id,
      });
      //根据商品id查询价格参数
      that.getWhwereSetId(options.id);
    } else {
      app.showModal("请先保存基本信息后再来添加!");
    }
  },

  //单选,价格单位
  radioChange: function (e) {
    var that=this;
    that.setData({
      "form.price_company":e.detail.value,
    });
  },

  //根据商品id查询价格参数
  getWhwereSetId: function (shops_id) {
    var that = this;
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/price/getWhwereSetId',
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        setId: shops_id,
      },
      success: function (res) {
        console.log(res);
        if (res.data.state == 200) {
          var form = res.data.data;
          if (!app.checkInput(form)) {
            that.setData({
              form: form,
              param: "update",
            });
          }
        }else{
          app.showModal(res.data.msg);
        }
      }
    })
  },

  //表单提交
  bindFormSubmit: function (e) {
    var that = this;
    var form = that.data.form;

    //验证非空
    if (app.checkInput(e.detail.value.original_price)) {
      app.showToast("请输入原价!", "none");
      return;
    } else if (app.checkInput(e.detail.value.present_price)) {
      app.showToast("请输入现价!", "none");
      return;
    } else if (app.checkInput(e.detail.value.surplusNum)) {
      app.showToast("请输入剩余数量!", "none");
      return;
    } else if (app.checkInput(e.detail.value.price_company)) {
      app.showModal("请选择价格单位");
      return;
    } else {
      form.original_price = e.detail.value.original_price;
      form.present_price = e.detail.value.present_price;
      form.surplusNum = e.detail.value.surplusNum;
      form.surplusNum_company =  form.price_company;
    }

    //发起请求
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/price/save_or_update',
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: form,
      success: function (res) {
        console.log(res);
        app.showModal(res.data.msg);
        if (res.data.state == 200) {
          wx.navigateBack();
        }
      }
    })
  },
})