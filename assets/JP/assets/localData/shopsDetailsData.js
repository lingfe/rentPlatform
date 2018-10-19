

module.exports ={
  //基本信息
  basicInfo: {
    //标签
    lable_list: ["0人喜欢", "0次浏览", "0次转发"],
    //用户信息
    user_info: {},
    //tabs导航菜单
    tabs_list: [],
    //商铺选购分类tabs菜单
    shopsChooseType_tabs_list: [],
    //商铺商品
    commodity_list: null,
  },

  //表单，基本信息
  form: {
    shopsName: null,//商铺名称
    contactNumber: null,//联系电话
    address: null,//详细地址
    businessHours: null,//营业时间

    logo: null,//上传商铺logo或门面照片
    position_info: null,//位置信息
    city: wx.getStorageSync("city"),//城市
    images: [],//上传门店内外周边环境照片
    creator: wx.getStorageSync("openid"),//申请者
  },

}