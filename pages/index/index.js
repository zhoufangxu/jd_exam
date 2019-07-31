//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_list:[],
    icon_list:[],
    shop_List:[],
    pno:0,
    pageSize:7
  },
  goCategory:function(){
    wx.switchTab({
      url:'/pages/category/category'
    })
  },
  getkey:function(){
    wx.navigateTo({
      url: '/pages/search/search'
    });
  },
  getImgList:function(){
    wx.request({
      url: 'http://127.0.0.1:3000/imageListjd',
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        this.setData({
          img_list:result.data
        })
      }
    });
      
  },
  getIcon:function(){
    wx.request({
      url:'http://127.0.0.1:3000/getIconList',
      method:'GET',
      success:(result)=>{
        this.setData({
          icon_list:result.data
        })
      }
    })
  },
  getShopList:function(){
    var p = this.data.pno+1;
    var ps = this.data.pageSize;
    wx.request({
      url:"http://127.0.0.1:3000/shopList",
      data:{pno:p,pageSize:ps},
      method:"GET",
      success:(result)=>{
        var nrows = this.data.shop_List.concat(result.data.data);
          this.setData({
            shop_List:nrows,
            pno:p
          })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getImgList();
    this.getIcon();
    this.getShopList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
      
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  onReachBottom: function(){
      this.getShopList();
  }
})
