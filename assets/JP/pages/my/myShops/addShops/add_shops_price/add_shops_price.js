// pages/my/myShops/addShops/add_shops_price/add_shops_price.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //表单
    form: {
      charging_fee:null,//起送费
      distribution_fee:null,//配送费
      per_capita_price:null,//人均消费
      setId: null,//商铺id
      creator: wx.getStorageSync("openid"),//创建者
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (!app.checkInput(options.shops_id)) {
      that.setData({
        "form.setId": options.shops_id,
      });
      //根据商铺id查询价格参数
      that.getWhwereSetId(options.shops_id);
    } else {
      app.showModal("请先保存基本信息后再来添加!");
    }
  },

  //根据商铺id查询价格参数
  getWhwereSetId:function(shops_id){
    var that=this;
    wx.request({
      url: app.config.zberPath_web + 'zber_sys/price/getWhwereSetId',
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        setId:shops_id,
      },
      success: function (res) {
        console.log(res);
        app.showModal(res.data.msg);
        if (res.data.state == 200) {
          var form=res.data.data;
          if(!app.checkInput(form)){
            var date=new Date();
            
            that.setData({
              form: form,
              param:"update",
            });
          }
        }
      }
    })
  },

  //表单提交
  bindFormSubmit: function (e) {
    var that = this;
    var form = that.data.form;

    //验证非空
    if (app.checkInput(e.detail.value.charging_fee)) {
      app.showToast("请输入起送费!", "none");
      return;
    } else if (app.checkInput(e.detail.value.distribution_fee)) {
      app.showToast("请输入起送费!", "none");
      return;
    } else if (app.checkInput(e.detail.value.per_capita_price)) {
      app.showToast("请输入起送费!", "none");
      return;
    } else  {
      form.charging_fee = e.detail.value.charging_fee;
      form.distribution_fee = e.detail.value.distribution_fee;
      form.per_capita_price = e.detail.value.per_capita_price;
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