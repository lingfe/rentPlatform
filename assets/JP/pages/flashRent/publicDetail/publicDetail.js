// pages/flashRent/publicDetail/publicDetail.js
/**  
 * 作者: lingfe
  * 时间: 2017 - 12 - 7
  * 描述: 众筹项目详情_合伙创业
  * 
 **/
//获取应用实例
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["项目介绍", "对接方案", "加盟标准"],   //tab菜单列
    activeIndex: 0,         //tab切换下标
    sliderOffset: 0,        //坐标x
    sliderLeft: 0,          //坐标y
    ax: 1,
    info:{
      imageArray:"https://p9.pstatp.com/list/190x124/pgc-image/153753804821635659c6b7b",
      title:"bubblekiss清镇加盟店",
      threshold:25,
      releaseType:"合伙创业",
      industryChoice:"百货",
      projectDescription: "浙江乙尚丽品贸易有限公司旗下bubblekiss品牌，目前在浙江已经开设7家直营店，已进驻龙湖、万达、远洋、银泰等商场。 现在面向贵州发展加盟事业，期待与你共同发展",
      projectIntroduction: [
        {
          "title": null,
          "content": [
            {
              "content": "我们很清楚如何帮你开好一家精品生活馆"
            },
            {
              "content": "2017年，BUBBLEKISS开了9家直营店，我们期待通过轻量级的城市合伙模式，完成2018年贵州地区10家加盟，",
              "content_Bold": "将BUBBLEKISS的品牌、经营、管理、师资、资讯、广告、销售、体系贡献给精彩变革中的精品零售行业。",
              "img": "https: //static.daho.club/static/upload/web.daho.club/dahuo/jiamengdaili/1.png"
            },
            {
              "content": "我们想做什么"
            },
            {
              "content": "BUBBLEKISS在国内，起步于2017年，是行业的后来者。我们专心做的是传播精品生活的理念和提升专业能力，一家店开好了，积累了一定的人气，我们才陆续开分店。",
              "img": "https: //static.daho.club/static/upload/web.daho.club/dahuo/jiamengdaili/2.png"
            },
            {
              "content": "截止到现在，",
              "content_Bold": "在全国已经有了9家自己的直营店，已入驻远洋、龙湖、万达、银泰等知名商场，接待了无数消费者。",
              "img": "https: //static.daho.club/static/upload/web.daho.club/dahuo/jiamengdaili/3.png"
            },
            {
              "content": "在经营过程中，我们得到了非常多朋友的支持，可以这么说，销售超出了我们的预期，这样的认可也更加坚定了我们招募城市合伙伙伴的行业责任。"
            },
            {
              "content_Bold": "时尚的精品生活快消品，在国内外都非常受欢迎，并且大众化的局面日益升温。",
              "content_last": "市场进入洗牌阶段，缺乏完善的管理体系、参差不齐的管理水平的小门店的闭塞体验等势必淘汰。",
              "img": "https: //static.daho.club/static/upload/web.daho.club/dahuo/jiamengdaili/4.png"
            },
            {
              "content": "以往的实战经验告诉我，从客户与时俱进的需求出发才能最大化地实现价值。经营是需要口碑相传的，做好管理和运营都需要有实践实力，做到极致，才能分享给大家，不是说空话，而是谈经验。",
              "img": "https: //static.daho.club/static/upload/web.daho.club/dahuo/jiamengdaili/5.png"
            },
            {
              "content": "我们很清楚一个精品生活馆要开好需要具备什么条件，比如选址、客群定位、经营的程度、货品的精准配置，互联网智能的更新等。"
            },
            {
              "content_Bold": "身边经常会有很多同行来向我们请教，但片面化的交流能提供的帮助毕竟有限，所以我们非常欢迎更多意向者加入BUBBLEKISS，共享BUBBLEKISS。",
              "img": "https: //static.daho.club/static/upload/web.daho.club/dahuo/jiamengdaili/6.png"
            },
            {
              "content_Bold": "我们的城市合伙人计划是要在2018年完成100家，第一年深耕细作，2020年达到500家，成为中国的精品生活馆领导品牌。"
            },
            {
              "content": "BUBBLEKISS的模式首先是轻量级的，现在是大众创业万众创新的时代，我们希望让更多人懂得科学运营，懂得强化专业和服务，一起颠覆行业秩序，同时也为中国的精品生活馆产业贡献一些实实在在的力量。"
            },
            {
              "content": "我们能做什么"
            },
            {
              "content": "一直以来，BUBBLEKISS都着力于精品生活馆经营、门店销售人员培训、企业联盟合作、城市合伙等板块，我们做好了自己的经营，也有能力做好指导与布局。",
              "img": "https: //static.daho.club/static/upload/web.daho.club/dahuo/jiamengdaili/7.png"
            },
            {
              "content": "我们的运营团队已然成熟，包含了品牌、市场推广、拓展、培训、营销、售后服务、行政支持等八大中心；"
            },
            {
              "content": "各版块负责人的管理经验都在5年以上，坚持以为消费者服务为先导，以不断挑战业绩指标为乐趣，团队的强大形成了我们无法替代的竞争力。",
              "img": "https: //static.daho.club/static/upload/web.daho.club/dahuo/jiamengdaili/8.png"
            },
            {
              "content": "这也更有助于我们对城市合伙人的交流与综合指导，",
              "content_Bold": "BUBBLEKISS在如何选址、装修、动线设计、空间布局、后期的培训教育、系统化运营方面是成体系在持续运作的，所以开馆的前中后我们都可以提供实际的帮助。"
            },
            {
              "content": "当然，我们一直顺应现代广告传播的需求，通过新媒体、网络、电台、期刊、杂志等各种形式进行全方位立体宣传。最重要的是，多年良好的口碑宣传渠道，也为BUBBLEKISS合伙人提供了有力保障。",
              "img": "https: //static.daho.club/static/upload/web.daho.club/dahuo/jiamengdaili/8.png"
            },
            {
              "content_Bold": "你准备好了吗？"
            },
            {
              "content_Bold": "我们等你。"
            }
          ]
        },
        {
          "title": "加盟方案",
          "content": [
            {
              "img": "https://p9.pstatp.com/list/190x124/pgc-image/15379734164119a5d1026e2"
            }
          ]
        },
        {
          "content": [
            {
              "img": "https://p3.pstatp.com/list/190x124/7b93000e117d9dcdb06c"
            }
          ]
        }
      ],
      dockingPlan: [
        {
          "title": "加盟方案",
          "content": [
            {
              "img": "https://p9.pstatp.com/list/190x124/pgc-image/15379734164119a5d1026e2"
            }
          ]
        }
      ],
      standardofJoining:[
        {
          "content": [
            {
              "img": "https://p3.pstatp.com/list/190x124/7b93000e117d9dcdb06c"
            }
          ]
        }
      ]
    }
  },


  //收藏
  bindtabAX: function (e) {
    this.setData({
      ax: this.data.ax == 1 ? 2 : 1,
    });
  },

  //信息
  bindtabXX: function (e) {
    wx.showModal({
      title: '提示',
      content: '请申请加盟,我们会联系您!',
    })
  },

  //tab点击切换
  tabClick: function (e) {
    //当前
    var that = this;
    var name = e.currentTarget.dataset.name;
    if (name == "我发布的") {
      //我发布的
      // that.requestDataRelease(that);
    } else if (name == "收藏夹") {
      //收藏夹
      //that.requestDataFavorites(that);
    } else if (name == "档案袋") {
      //回收站
      //that.requestDataRecovery(that);
    }

    //设置
    that.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    //设置tab
    var sliderWidth = 88;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          id: options.id,
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
})