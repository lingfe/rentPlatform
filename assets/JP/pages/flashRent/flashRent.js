var Util = require("../../utils/util");

//获取应用实例
var app = getApp();

Page({
  data: {
    model:0,
    PriceRange: ['全部', '0 - 1 万', '1 - 5 万', '5 - 50 万', '50万+'],
    priceIndex: 0,           //选择价格索引 
    num: 0,                  //获取选中的价格索引，控制样式
    addressInfo: '贵阳',     //城市定位
    windowHeight: 1000,      //默认高度
    screen: false,           //是否显示筛选控制
    tabs: app.localData.sxData,        //筛选数据
    activeIndex: 0,                    //tab切换下标
    sliderOffset: 0,                   //坐标x
    sliderLeft: 0,                     //坐标y
    tabsName: ['金额', '类型', '行业'],   //筛选类型
    str: {
      AmountOfMoney: [{
        minThreshold: '全部',
        maxThreshold: null, i: 0
      }],                           //金额
      in_releaseType: [],          //类型
      in_industryChoice: [],       //行业
    },


    hidden: true,           // loading动画是否显示
    tipShow: false,         // 判断是否还有更多数据
    page: 0,                // 当前分页
    nextPage: "",           // 分页信息
    us: "",                 // 用户分享的ID，之前为了做分享统计什么的，现在没卵用
    lists:app.localData.tuijian_list,
    list: [ {
      img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1972158158,1977337159&fm=27&gp=0.jpg', //图
      title: '新货3m普通钓鱼竿',//标题
      price: '2.00',//价格
      originalPrice: '80.00',//原价
      company: '天',//单位(时，天,月，年)，
      label: ['质量好','耐用'],//标签
      types: '普通',//类型(0普通,1合租)
      source: '个人',//来源(0官方,1个人，2商家，3企业)
      sourceName: '萝卜',//来源名称
      sourceCredit: '0',//来源信用(0未认证,1已认证，未实名,2已认证，已实名)
      address: '湿地公园南明区',//位置
      time: '1小时前',//日期
      }, {
        img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3033722004,3039145737&fm=27&gp=0.jpg', //图
        title: '中央公园新楼盘出租出售',//标题
        price: '1500.00',//价格
        originalPrice: '4500000.00',//原价
        company: '月',//单位(时，天,月，年)，
        label:['交通方便','房子大','环境好'],//标签
        types: '0',//类型(0普通,1合租)
        source: '企业',//来源(0官方,1个人，2商家，3企业)
        sourceName: '中原房地产有限责任公司',//来源名称
        sourceCredit: '0',//来源信用(0未认证,1已认证，未实名,2已认证，已实名)
        address: '湿地公园南明区',//位置
        time: '07-11',//日期
    }, {
        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2455858493,815624535&fm=11&gp=0.jpg', //图
      title: '本人做家教',//标题
      price: '150.00',//价格
      originalPrice: '0',//原价
      company: '时',//单位(时，天,月，年)，
      label: ['大学生','负责'],//标签
      types: '0',//类型(0普通,1合租)
      source: '个人',//来源(0官方,1个人，2商家，3企业)
      sourceName: '刘老师',//来源名称
      sourceCredit: '1',//来源信用(0未认证,1已认证，未实名,2已认证，已实名)
      address: '湿地公园南明区',//位置
      time: '07-09',//日期
    }]
  },

  //初始化设置
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '闪租'
    })
  },

  //筛选是否显示
  bindtapScreen: function () {
    this.setData({ screen: this.data.screen == true ? false : true, isCaidan: this.data.screen == true ? true : false });
  },

  //是否显示选择价格
  bindtapButton: function (e) {
    this.setData({
      isPrices: this.data.isPrices == false ? true : false
    });
  },

  //提示函数
  showModal:function(e){
    wx.showModal({
      title: e.currentTarget.dataset.title,
      content: e.currentTarget.dataset.msg,
      showCancel: false,
    });
  },

  // 对数据进行提取
  dataRead: function (data) {
    // 用于存放提取后的数据
    var dataArr = [];
    data.forEach(function (item) {
      // 用于存放单条团数据
      var groupData = {};
      groupData.groupId = item.groupId;
      groupData.goodsImg = item.goodsImg;
      groupData.goodsTitle = item.goodsTitle;
      groupData.groupSize = item.groupSize;
      groupData.groupPrice = item.groupViewPrice;
      groupData.lessNum = item.lessNum;
      groupData.groupEndTime = (item.restTime) / 1000;
      groupData.displayTime = "";
      groupData.userLst = item.userLst;

      dataArr.push(groupData);
    });
    return dataArr;
  },

  // 倒计时方法
  countDown: function (listData, time, i) {
    var self = this, interval = "cleartime" + i;
    if (time != 0) {
      interval = setInterval(function () {
        listData[i].groupEndTime = time - 1;
        listData[i].displayTime = Util.formatTime(listData[i].groupEndTime);
        self.setData({
          lists: listData
        })
        if (time <= 0) {
          clearInterval(interval);
        }
      }, 1000)
    }
  },

  //删除筛选条件,重复点击去除
  clearBtn_to: function (e) {
    var that = this;
    var str = that.data.str;
    //得到name 
    var name = e.currentTarget.dataset.name;
    //得到index 
    var index = e.currentTarget.dataset.index;
    //得到value
    var value = e.currentTarget.dataset.value;
    //得到tabs
    var tabs = that.data.tabs;
    //判断
    if (name == "AmountOfMoney") {
      for (var k = 0; k < tabs[0].content.length; ++k) {
        if (tabs[0].content[k].minThreshold == value) {
          if (tabs[0].content[k].checked == false) {
            tabs[0].content[k].checked = true;
            str.AmountOfMoney[0] = {
              minThreshold: tabs[0].content[k].minThreshold,
              maxThreshold: tabs[0].content[k].maxThreshold, i: k
            };
            that.setData({
              priceIndex: k,
              num: k,
            });
          } else {
            tabs[0].content[k].checked = false;
            str.AmountOfMoney[0] = [];
          }
        } else {
          tabs[0].content[k].checked = false;
        }
      }
    } else if (name == 'in_releaseType') {
      if (value == "全部") {
        str.in_releaseType = [];
        if (tabs[1].content[0].checked == true) {
          for (var k = 0; k < tabs[1].content.length; ++k) {
            tabs[1].content[k].checked = false;
            str.in_releaseType.splice(k, 1);
          }
        } else {
          for (var k = 0; k < tabs[1].content.length; ++k) {
            tabs[1].content[k].checked = true;
            str.in_releaseType.push({ releaseType: tabs[1].content[k].name, i: k });
          }
        }

      } else {
        for (var k = 0; k < tabs[1].content.length; ++k) {
          if (tabs[1].content[k].name == value) {
            if (tabs[1].content[k].checked == false) {
              tabs[1].content[k].checked = true;
              str.in_releaseType.push({ releaseType: tabs[1].content[k].name, i: k });
            } else {
              tabs[1].content[k].checked = false;
              for (var j = 0; j < str.in_releaseType.length; ++j) {
                if (str.in_releaseType[j].i == k) {
                  str.in_releaseType.splice(j, 1);
                  break;
                }
              }
            }
            break;
          }
        }
      }
    } else if (name == "in_industryChoice") {
      if (value == "全部") {
        str.in_industryChoice = [];
        if (tabs[2].content[0].checked == true) {
          for (var k = 0; k < tabs[2].content.length; ++k) {
            tabs[2].content[k].checked = false;
            str.in_industryChoice.splice(k, 1);
          }
        } else {
          for (var k = 0; k < tabs[2].content.length; ++k) {
            tabs[2].content[k].checked = true;
            str.in_industryChoice.push({ industryChoice: tabs[2].content[k].name, i: k });
          }
        }

      } else {
        for (var k = 0; k < tabs[2].content.length; ++k) {
          if (tabs[2].content[k].name == value) {
            if (tabs[2].content[k].checked == false) {
              tabs[2].content[k].checked = true;
              str.in_industryChoice.push({ industryChoice: tabs[2].content[k].name, i: k });
            } else {
              tabs[2].content[k].checked = false;
              for (var j = 0; j < str.in_industryChoice.length; ++j) {
                if (str.in_industryChoice[j].i == k) {
                  str.in_industryChoice.splice(j, 1);
                  break;
                }
              }
            }
            break;
          }
        }
      }
    }

    that.setData({
      tabs: tabs,
      str: str,
    });
  },

  //重置筛选
  bindtapReset: function (e) {
    //得到str
    var str = this.data.str;
    //得到tabs
    var tabs = this.data.tabs;
    //遍历tabs
    for (var i = 0, lenI = tabs.length; i < lenI; ++i) {
      //遍历tabs.content
      for (var j = 0, lenJ = tabs[i].content.length; j < lenJ; ++j) {
        tabs[i].content[j].checked = false;
      }
    }

    //设置值
    this.setData({
      tabs: tabs,
      priceIndex: 0,
      num: 0,
      str: { AmountOfMoney: [{ minThreshold: '全部', maxThreshold: null, i: 0 }], in_releaseType: [], in_industryChoice: [] },
    });
  },

  //tab切换
  tabClick: function (e) {
    this.setData({ sliderOffset: e.currentTarget.offsetLeft, activeIndex: e.currentTarget.id });
  },

  //筛选是否显示
  bindtapScreen: function () {
    this.setData({ screen: this.data.screen == true ? false : true, isCaidan: this.data.screen == true ? true : false });
  },

  //分享
  onShareAppMessage: function (e) {
    return {
      title: '附近出租',
      desc: '想啥租啥!',
      path: '/pages/indexTo/indexTo?id=1001'
    }
  },
})