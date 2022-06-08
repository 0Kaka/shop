// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    categoryItem:[
      '签到','附近','展会','福利','玩乐','体育','周边','亲子'    
    ],
    daohang:[
      [
        {text:"签到"},
      ],
      [
        {text:"附近"},
      ],
      [
        {text:"展会"},
      ],
      [
        {text:"福利"},
      ],
      [
        {text:"玩乐"},
      ],
      [
        {text:"体育"},
      ],[
        {text:"周边"},
      ],[
        {text:"亲子"},
      ],
    ],
    goodslist:[
    //   [
    //   {src:"/images/lists01.jpg",text:"商品"},
    //   {src:"/images/lists02.jpg",text:"商品"},
    //   {src:"/images/lists03.jpg",text:"商品"},
      
    //   ],
    //   [
    //   {src:"/images/lists04.jpg",text:"商品"},
    //   {src:"/images/lists03.jpg",text:"商品"},
    //   {src:"/images/lists05.jpg",text:"商品"},
    //   ],[
    //   {src:"/images/lists06.jpg",text:"商品"},
    //   {src:"/images/lists05.jpg",text:"商品"},
    //   {src:"/images/lists02.jpg",text:"商品"},
    //   ],[
    //   {src:"/images/lists03.jpg",text:"商品"},
    //   {src:"/images/lists04.jpg",text:"商品"},
    //   {src:"/images/lists06.jpg",text:"商品"},
    // ],
    // [
    //   {src:"/images/lists02.jpg",text:"商品"},
    //   {src:"/images/lists03.jpg",text:"商品"},
    //   {src:"/images/lists04.jpg",text:"商品"},
    // ]
  ],
  categorys:[]
  },
  setNum(options){
    // console.log(options.target.dataset.index)
    this.setData({
      num:options.target.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    wx.request({
      url: 'http://47.115.51.185/api/category',
      success(res){
        console.log(res.data.data);
        _this.setData({
          categorys:res.data.data
        })
      }
    })
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

  }
})