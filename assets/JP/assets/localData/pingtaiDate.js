
export default{
  //布局model
  model:[
    0,//其他
    1,//官方闪租（常规，专用布局方式）
    2,//新鲜野货（常规，专用布局方式）
    3,//生活预约（常规，专用布局方式）
    4,//餐饮食品（常规，专用布局方式）
    5,//特殊宠物（常规，专用布局方式）
  ],

  //类别
  category:[
    0,//其他
    1,//渔具
    2,//八月瓜
    3,//预约剪发
    4,//土元
    5,//烤鱼
    6,//牛纳尔果，羊奶果，
    7,//蘑菇
  ],
  
  //背景颜色
  color: [
    { color: "#330066" },//主体色,
    { color: "#ffffff,#eeeeee" },//辅助色
  ],

  //平台产品
  pintai_name: [
    {
      name: "官方闪租", content: "房子出租,工具出租..."
    },
    {
      name: "新鲜野货", content: "八月瓜,野鸡,中草药...",
    },
    {
      name: "生活预约", content: "剪发预约,洗车预约,咨询预约,服装定制预约..."
    },{
      name:"特殊宠物",content:"",
    },{
      name:"餐饮食品",content:"",
    }
  ],  

  //平台名字
  pingtai_name: [
    {
      name: "零", remark: "表示:零售,零散的,比较少的...",
      name: "需要", remark: "出行需要代步工具,旅游需要地图导航,饮食需要健康,工作需要愉快,腻了需要新鲜感,雷了需要睡觉..",
    }
  ],

  //详情model1
  info: {
    tabs: ["详细介绍", "基地环境", "联系我们"],
    images: [
      "http://108108byg.com/uploads/180202/3-1P202210TcA.jpg",
      "http://108108byg.com/uploads/170915/3-1F915021013327.jpg",
      "http://108108byg.com/uploads/170915/3-1F915203FU25.jpg",
      "http://108108byg.com/uploads/allimg/180727/1-1PHGA5320-L.png"
    ],
    model: 1,  //模块
    img: 'http://108108byg.com/uploads/180202/3-1P202210TcA.jpg', //图片
    title: "八月炸野果八月瓜野香蕉，八月炸野果八月瓜野香蕉，八月炸野果八月瓜野香蕉", //标题
    price: 15, //价格
    company: "斤",  //单位
    surplusNum: 155,//剩余数量
    sellNum: 188,//销售数量
    likeNum: 553,//喜欢人数
    lable: "保健品",//标签
    source: '商家',//来源(0.官方,1.个人，2.商家，3.企业)
    sourceName: '八月瓜',//来源名称
    sourceLog: 'http://108108byg.com/skin/images/logo.png',//来源LOG
    sourceCredit: '2',//来源信用(0.未认证,1.已认证，未实名,2.已认证，已实名)
    dateTime: '刚刚',//日期
    threshold: 25,//金额
    serverType: "野货",//服务类型
    industryChoice: "水果类",//行业
    describe: "八月瓜，又名野香蕉和八月，中药名称“预知子”。不同地方的叫法有所不同，如福建等地把八月瓜称为拉（音）。是毛茛目、三叶木通的果实，野生果品因八月果熟开裂而得名。果形似香蕉，富含糖、维生素C和12种氨基酸，以及人体不能合成的缬基酸、蛋氨酸、异亮氨酸、苯丙氨酸、赖氨酸等。果味香甜，为无污染的绿色食品，有“土香蕉”之称。分布在贵州、云南、湖南一带，其中以贵州铜仁、湖南张家界天子山景区、四川雅安石棉居多，农历八月瓜熟开口，索溪峪、杨家界等山麓谷地、林缘灌木丛中野生资源丰富。",//描述
    projectIntroduction: [
      {
        "content": [
          {
            "title": "野生产地",
            "content": "八月瓜产地分布于山西、湖南、河南、陕西、安徽、浙江、江西、福建、湖北、广东、广西、四川、重庆、云南、贵州、西藏等地，其中以贵州铜仁、湖南张家界天子山景区居多，农历八月瓜熟开口，索溪峪、杨家界等山麓谷地、林缘灌木丛中野生资源丰富，为上乘野果。",
            "img": "http://108108byg.com/uploads/allimg/180202/3-1P202210558.jpg",
            "text": "上图来源于网络"
          },
          {
            "img": "https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a0522f43b87e950561afb3e71513826/f9dcd100baa1cd11de8e5f17b812c8fcc3ce2dc8.jpg",
            "text": "上图来源于网络"
          },
          {
            "title": "产地环境",
            "content_Bold": "1.生于山坡阳面、路旁八月瓜河边、林缘和阔叶林内。 2.生于山地杂木林或灌木丛中。3.生于海拔600 - 2600m的石山林缘。",
            "img": "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=777cb069050828387c00d446d9f0c264/203fb80e7bec54e766d20168bb389b504fc26a8d.jpg",
            "text": "上图来源于网络"
          },
          {
            "title": "药用价值",
            "content": "【主治】：小便短赤；淋浊；水肿；风湿痹痛；跌打损伤；乳汁不通；疝气痛；子宫脱垂；睾丸炎\n【功效】：清热利湿；活血通脉；行气止痛\n【性味】：苦；凉\n【药材基源】：为木通科植物五风藤、宽叶八月瓜和小花八月瓜的果实。\n【用法用量】：内服：煎汤，3-9g。\n【归经】：膀胱；心；肝经"
          }
        ]
      },
      {
        "content": [
          {
            "img": "https://p9.pstatp.com/list/190x124/pgc-image/15379734164119a5d1026e2"
          },
          {
            "img": "https://p3.pstatp.com/list/190x124/7b93000e117d9dcdb06c"
          }
        ]
      },
      {
        "content": [
          {
            "title": "公司名称：元江春茂农业生物科技有限公司",
            "content_Bold": "地址：云南省玉溪市元江县因远镇安定村蕨基坝",
          },
          {
            "content": "联系人：玉珍",
          },
          {
            "content": "电话：13135098598（同微信）",
          },
          {
            "content": "www.108108byg.com",
          }
        ]
      }
    ],
  }
}