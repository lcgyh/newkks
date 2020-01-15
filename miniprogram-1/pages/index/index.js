//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    systemInfo: wx.getSystemInfoSync(),
    userInfo: {},
    headerInfo: {
      spShop: {
        sname: '龙口店',
        name: '龙口店',
        city: {
          name: "上海市"
        },
        area: {
          name: '长宁区'
        },
        address: "威宁路369号10楼深兰科技"
      },
      spBanners: [{
        picUrlAll: 'https://images2015.cnblogs.com/blog/1083235/201705/1083235-20170529224430274-470334084.png',
        spBannerId: '1'
      }, {
        picUrlAll: 'https://images2015.cnblogs.com/blog/1083235/201705/1083235-20170529224430274-470334084.png',
        spBannerId: '2'

      }, {
        picUrlAll: 'https://images2015.cnblogs.com/blog/1083235/201705/1083235-20170529224451586-1329647239.png',
        spBannerId: '3'

      }],
      pdCategorys: [{
        pdCategoryId: '1',
        picUrlAll: "https://images2015.cnblogs.com/blog/1083235/201705/1083235-20170529224430274-470334084.png", name: '新奇好物'
      }, {
          pdCategoryId: '2',
          picUrlAll: "https://images2015.cnblogs.com/blog/1083235/201705/1083235-20170529224430274-470334084.png", name: '新奇好物'
        }, {
          pdCategoryId: '3',
          picUrlAll: "https://images2015.cnblogs.com/blog/1083235/201705/1083235-20170529224430274-470334084.png", name: '新奇好物'
        }, {
          pdCategoryId: '4',
          picUrlAll: "https://images2015.cnblogs.com/blog/1083235/201705/1083235-20170529224430274-470334084.png", name: '新奇好物'
        }, {
          pdCategoryId: '5',
          picUrlAll: "https://images2015.cnblogs.com/blog/1083235/201705/1083235-20170529224430274-470334084.png", name: '新奇好物'
        }, {
          pdCategoryId: '6',
          picUrlAll: "https://images2015.cnblogs.com/blog/1083235/201705/1083235-20170529224430274-470334084.png", name: '新奇好物'
        }, {
          pdCategoryId: '7',
          picUrlAll: "https://images2015.cnblogs.com/blog/1083235/201705/1083235-20170529224430274-470334084.png", name: '新奇好物'
        }]
    },
    pageItemInfo: {},
    navBarHidden: true,
    goTopButtonHidden: true,
    swiperCurrent: false,
    intervarID: null,
    addMineHidden: true
  },
  onLoad: function () {

  }

})
