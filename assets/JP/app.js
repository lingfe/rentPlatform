import localData from './assets/localData/localData.js'

App({
  
  localData, //本地数据


  //验证非空
  checkInput: function (data) {
    if (data == null || data == undefined || data == "" || data == 'null') {
      return true;
    }
    if (typeof data == "string") {
      var result = data.replace(/(^\s*)|(\s*$)/g, "");
      return result.length == 0 ? true : false;
    } else {
      return false;
    }
  },

  //当前时间
  getDateTime: function () {
    var dateTime = new Date().toLocaleString();
    return dateTime;
  },

  //提示框，有按钮
  showModal: function (msg) {
    wx.showModal({
      title: msg,
      showCancel: false,
    });
  },

  //提示，无按钮
  showToast: function (msg, icon) {
    wx.showToast({
      title: msg,
      icon: icon,
      duration: 2000
    })
  },

  globalData: {
    userInfo: null
  }
})