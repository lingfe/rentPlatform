
export default{
  //模块值说明
  model:[
    0,//闪租。钓鱼竿
    1,//野货。八月瓜
    2,//预约。预约剪发
  ],

  //布局说明
  bujusming_list: [{
    "title": "title表示标题,这是标题部分",
    "content": "content表示内容,如:八月瓜产地分布于山西、湖南、河南、陕西、安徽、浙江、江西、福建、湖北、广东、广西、四川、重庆、云南、贵州、西藏等地，其中以贵州铜仁、湖南张家界天子山景区居多，农历八月瓜熟开口，索溪峪、杨家界等山麓谷地、林缘灌木丛中野生资源丰富，为上乘野果。",
    "img": "http://108108byg.com/uploads/allimg/180202/3-1P202210558.jpg",
    "text": "img图片,这是图片说明",
    "content_Bold": "这里的内容加粗了，content_Bold",
  }, {
    "content_Bold": "这里另外一个item，这里的内容也加粗了，content_Bold",
  }],

  //价格单位
  price_company: ["月", "株", "盒", "斤","人", "份", "件"],

  //浏览\看过次数，
  browse_num: 1502,

  //推荐
  tuijian_list:[

    /**餐饮食品 start */
    {
      model: 4, //布局model4
      sourceLog: "https://p0.meituan.net/deal/3f47cdea4688224ddc30a1047e87472b93015.jpg",//log
      title:"A谯家大头炮特色烤鱼",
      is_subscribe:1,//是否可以预约0=否，不可以，1=是,可以。
      is_follow: 1,//是否显示预约0=否，不显示，1=是,显示。
      sellNum: 188,//销售数量
      charging_fee:20,//起送费
      distribution_fee:2,//配送费
      category:5,//烤鱼
      //推荐商品
      tuijian_list:[
        {
          img:"https://p0.meituan.net/shaitu/59178c00c2bea2254344374ce67447512265801.jpg@55w_55h_1e_1c",//图片
          title:"烤鱼草鱼1条3斤左右",//标题
          sellNum: 188,//销售数量
          likeNum: 55,//喜欢人数
          price:88,//价格
        },{
          img: "https://p0.meituan.net/shaitu/59178c00c2bea2254344374ce67447512265801.jpg@55w_55h_1e_1c",//图片
          title: "烤鱼江团1条3斤左右",//标题
          sellNum: 188,//销售数量
          likeNum: 55,//喜欢人数
          price: 98,//价格
        }
      ],
    },
    /**餐饮食品 end */

    //官方闪租 start
    {
      model:1,//布局model1
      img: '', //图
      title: '',//标题
      price: '18.00',//价格
      explain: '',//说明
      originalPrice: '180.00',//原价
      company: '月',//单位(时，天,月，年)，
      label: ['非常新'],//标签
      types: '普通',//类型(0.普通,1.合租)
      source: '商家',//来源(0.官方,1.个人，2.商家，3.企业)
      sourceName: '蕾蕾渔具',//来源名称
      sourceCredit: '2',//来源信用(0.未认证,1.已认证，未实名,2.已认证，已实名)
      address: '湿地公园南明区',//位置
      dateTime: '刚刚',//日期
      category:1,//类别
    }, 
    //官方闪租 start
    
    //新鲜野货 start
    {
      model: 2,  //模块
      img: 'http://108108byg.com/uploads/allimg/170831/1-1FS1222647.jpg', //图片
      title: "八月瓜果苗", //标题
      category: 2,//类别
      money: 1, //价格
      company: "珠",  //单位
      surplusNum: 155,//剩余数量
      sellNum: 188,//销售数量
      likeNum: 55,//喜欢人数
      source: '商家',//来源(0.官方,1.个人，2.商家，3.企业)
      sourceName: '八月瓜',//来源名称
      sourceLog: 'http://108108byg.com/skin/images/logo.png',//来源LOG
      sourceCredit: '2',//来源信用(0.未认证,1.已认证，未实名,2.已认证，已实名)
      dateTime: '刚刚',//日期
      },{
        model:2,  //模块
        img:'http://108108byg.com/uploads/180202/3-1P202210TcA.jpg', //图片
        title:"八月炸野果八月瓜野香蕉", //标题
        category: 2,//类别
        money: 15, //价格
        company:"斤",  //单位
        surplusNum:155,//剩余数量
        sellNum:188,//销售数量
        likeNum:55,//喜欢人数
        source: '商家',//来源(0.官方,1.个人，2.商家，3.企业)
        sourceName: '八月瓜',//来源名称
        sourceLog:'http://108108byg.com/skin/images/logo.png',//来源LOG
        sourceCredit: '2',//来源信用(0.未认证,1.已认证，未实名,2.已认证，已实名)
        dateTime: '刚刚',//日期
      }, {
        model: 2,  //模块
        img: '', //图片
        title: "麻皮八月瓜", //标题
        category: 2,//类别
        money: 10, //价格
        company: "斤",  //单位
        surplusNum: 155,//剩余数量
        sellNum: 188,//销售数量
        likeNum: 55,//喜欢人数
        source: '商家',//来源(0.官方,1.个人，2.商家，3.企业)
        sourceName: '八月瓜',//来源名称
        sourceLog: 'http://108108byg.com/skin/images/logo.png',//来源LOG
        sourceCredit: '2',//来源信用(0.未认证,1.已认证，未实名,2.已认证，已实名)
        dateTime: '刚刚',//日期
      }, {
        model: 2,  //模块
        img: '', //图片
        title: "八月瓜泡茶", //标题
      category: 2,//类别
        category: 2,//类别
        money: 20, //价格
        company: "斤",  //单位
        surplusNum: 155,//剩余数量
        sellNum: 188,//销售数量
        likeNum: 55,//喜欢人数
        source: '商家',//来源(0.官方,1.个人，2.商家，3.企业)
        sourceName: '八月瓜',//来源名称
        sourceLog: 'http://108108byg.com/skin/images/logo.png',//来源LOG
        sourceCredit: '2',//来源信用(0.未认证,1.已认证，未实名,2.已认证，已实名)
        dateTime: '刚刚',//日期
      }, {
        model: 2,  //模块
        img: '', //图片
        title: "八月瓜油", //标题
      category: 2,//类别
        money: 20, //价格
        company: "斤",  //单位
        surplusNum: 155,//剩余数量
        sellNum: 188,//销售数量
        likeNum: 55,//喜欢人数
        source: '商家',//来源(0.官方,1.个人，2.商家，3.企业)
        sourceName: '八月瓜',//来源名称
        sourceLog: 'http://108108byg.com/skin/images/logo.png',//来源LOG
        sourceCredit: '2',//来源信用(0.未认证,1.已认证，未实名,2.已认证，已实名)
        dateTime: '刚刚',//日期
      }, {
        model: 2,  //模块
        img: '', //图片
        title: "八月瓜果酒", //标题
      category: 2,//类别
        money: 20, //价格
        company: "斤",  //单位
        surplusNum: 155,//剩余数量
        sellNum: 188,//销售数量
        likeNum: 55,//喜欢人数
        source: '商家',//来源(0.官方,1.个人，2.商家，3.企业)
        sourceName: '八月瓜',//来源名称
        sourceLog: 'http://108108byg.com/skin/images/logo.png',//来源LOG
        sourceCredit: '2',//来源信用(0.未认证,1.已认证，未实名,2.已认证，已实名)
        dateTime: '刚刚',//日期
      }, {
      model: 2,  //模块
      img: 'http://108108byg.com/uploads/171122/3-1G122225T1G6.jpg', //图片
      title: "猫儿shi八月瓜", //标题
      category: 2,//类别
      money: 20, //价格
      company: "斤",  //单位
      surplusNum: 155,//剩余数量
      sellNum: 188,//销售数量
      likeNum: 55,//喜欢人数
      source: '商家',//来源(0.官方,1.个人，2.商家，3.企业)
      sourceName: '八月瓜',//来源名称
      sourceLog: 'http://108108byg.com/skin/images/logo.png',//来源LOG
      sourceCredit: '2',//来源信用(0.未认证,1.已认证，未实名,2.已认证，已实名)
      dateTime: '刚刚',//日期
    },
    {
      model: 2,  //模块
      img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1160545459,1736238826&fm=27&gp=0.jpg', //图片
      title: "贵州牛纳尔果", //标题
      category: 6,//类别
      money: 8, //价格
      company: "盒",  //单位
      surplusNum: 5,//剩余数量
      sellNum: 188,//销售数量
      likeNum: 55,//喜欢人数
      source: '商家',//来源(0.官方,1.个人，2.商家，3.企业)
      sourceName: '八月瓜',//来源名称
      sourceLog: 'http://108108byg.com/skin/images/logo.png',//来源LOG
      sourceCredit: '2',//来源信用(0.未认证,1.已认证，未实名,2.已认证，已实名)
      dateTime: '刚刚',//日期
    },
    {
      model: 2,  //模块
      img: '', //图片
      title: "云南羊奶果", //标题
      category: 6,//类别
      money: 8, //价格
      company: "盒",  //单位
      surplusNum: 55,//剩余数量
      sellNum: 188,//销售数量
      likeNum: 55,//喜欢人数
      source: '商家',//来源(0.官方,1.个人，2.商家，3.企业)
      sourceName: '八月瓜',//来源名称
      sourceLog: 'http://108108byg.com/skin/images/logo.png',//来源LOG
      sourceCredit: '2',//来源信用(0.未认证,1.已认证，未实名,2.已认证，已实名)
      dateTime: '刚刚',//日期
    },
    //新鲜野货 end

    /*生活预约 start */
    {
      model: 3,  //模块
      img: '', //图片
      title: "", //标题
      category: 3,//类别
      source: '商家',//来源(0.官方,1.个人，2.商家，3.企业)
      sourceName: '雾都美容美发',//来源名称
      sourceLog: '',//来源LOG
      sourceCredit: '2',//来源信用(0.未认证,1.已认证，未实名,2.已认证，已实名)
      address:'',//地址
      phone: "085183625295",//联系电话
      businessTime:"09:00-19:00",//营业时间
      headUses:"65",//人均消费￥
      dateTime: '刚刚',//日期
      remark:"",
    }
    /*生活预约 end */

    /**特殊宠物 start */
    ,{
      model:5,  //模块
      img: '', //图片
      title: "~", //标题
      source: 3,//来源(0.官方,1.个人，2.商家，3.企业)
      sourceName: '',//来源名称
      category: 4,//类别
      sourceLog: '',//来源LOG
      sourceCredit: 1,//来源信用(0.未认证,1.已实名认证)
      address: '',//地址
      phone: "",//联系电话
      businessTime: "09:00-19:00",//营业时间
      headUses: "",//人均消费￥
      dateTime: '刚刚',//日期
      remark: "",
    }
    /**特殊宠物 end */

  ],

  throwInTheCityData: [{        //投放城市数据   
    name: "华东地区",
    index: 0,
    content: [{
      name: "山东",
      checked: false,
    }, {
      name: "江苏",
      checked: false,
    }, {
      name: "安徽",
      checked: false,
    }, {
      name: "浙江",
      checked: false,
    }, {
      name: "福建",
      checked: false,
    }, {
      name: "上海",
      checked: false,
    }]

  }, {
    name: '华南地区',
    index: 1,
    content: [{
      name: "广东",
      checked: false,
    }, {
      name: "广西",
      checked: false,
    }, {
      name: '海南',
      checked: false,
    }]
  }, {
    name: "华中地区",
    index: 2,
    content: [{
      name: "湖北",
      checked: false,
    }, {
      name: "湖南",
      checked: false
    }, {
      name: "河南",
      checked: false
    }, {
      name: "江西",
      checked: false
    }]
  }, {
    name: '华北地区',
    index: 3,
    content: [{
      name: "北京",
      checked: false,
    }, {
      name: "天津",
      checked: false
    }, {
      name: "河北",
      checked: false
    }, {
      name: "山西",
      checked: false
    }, {
      name: "内蒙古",
      checked: false
    }]
  }, {
    name: "西北地区",
    index: 4,
    content: [{
      name: "宁夏",
      checked: false
    }, {
      name: "新疆",
      checked: false
    }, {
      name: "青海",
      checked: false
    }, {
      name: "陕西",
      checked: false
    }, {
      name: "甘肃",
      checked: false
    }]
  }, {
    name: "西南地区",
    index: 5,
    content: [{
      name: "四川",
      checked: false
    }, {
      name: "云南",
      checked: false
    }, {
      name: "贵州",
      checked: false
    }, {
      name: "西藏",
      checked: false
    }, {
      name: "重庆",
      checked: false
    }]
  }, {
    name: "东北地区",
    index: 6,
    content: [{
      name: "辽宁",
      checked: false
    }, {
      name: "吉林",
      checked: false
    }, {
      name: "黑龙江",
      checked: false,
    }]
  }, {
    name: "台港澳地区",
    index: 7,
    content: [{
      name: "台湾",
      checked: false,
    }, {
      name: "香港",
      checked: false
    }, {
      name: "澳门",
      checked: false
    }]
  }],
  sxData: [{          //筛选数据
    name: "金额",
    content: [{
      minThreshold: '全部',
      maxThreshold: null,
      value: '0',
      checked: true,
    }, {
      minThreshold: 0,
      maxThreshold: 1,
      value: '1',
      checked: false,
    }, {
      minThreshold: 1,
      maxThreshold: 5,
      value: '2',
      checked: false,
    }, {
      minThreshold: 5,
      maxThreshold: 50,
      value: '3',
      checked: false,
    }, {
      minThreshold: 50,
      maxThreshold: null,
      value: '4',
      checked: false,
    }],
  },
  {
    name: "类型",
    content: [{
      name: '全部',
      value: '0',
      checked: false,
    }, {
      name: '合伙创业',
      value: '1001',
      checked: false,
    }, {
      name: '干股纳才 ',
      value: '1002',
      checked: false,
    }, {
      name: '加盟代理',
      value: '1003',
      checked: false,
    }, {
      name: '股权交易',
      value: '1004',
      checked: false,
    }, {
      name: '生意转让',
      value: '1005',
      checked: false,
      notype: '非搭伙类型',
    }, {
      name: '金融理财',
      value: '1006',
      checked: false,
      notype: '非搭伙类型',
    }, {
      name: '房产投资',
      value: '1007',
      checked: false,
      notype: '非搭伙类型',
    }, {
      name: '其他',
      value: '1008',
      checked: false,
      notype: '非搭伙类型',
    }],
  },
  {
    name: "行业",
    content: [{
      name: '全部',
      value: '0',
      checked: false,
    }, {
      name: '餐饮',
      value: '1',
      checked: false,
    }, {
      name: '休闲娱乐',
      value: '2001',
      checked: false,
    }, {
      name: '互联网',
      value: '2',
      checked: false,
    }, {
      name: '传媒',
      value: '3',
      checked: false,
    }, {
      name: "教育",
      value: '30001',
      checked: false,
    }, {
      name: '装修',
      value: '4',
      checked: false,
    }, {
      name: "生活服务",
      value: '40001',
      checked: false,
    }, {
      name: "婚庆",
      value: '40002',
      checked: false,
    }, {
      name: '百货',
      value: '5',
      checked: false,
    }, {
      name: '医疗保健',
      value: '6',
      checked: false,
    }, {
      name: "美容美发",
      value: '7',
      checked: false
    }, {
      name: '汽车',
      value: '8',
      checked: false
    }, {
      name: '地产',
      value: '9',
      checked: false
    }, {
      name: '金融',
      value: '10',
      checked: false,
    }, {
      name: '其他',
      value: '11',
      checked: false
    }],
  }]
}