// pages/car/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList:[
      {id:1,
        goodsImage:"/images/lists01.jpg",
        goodsName:"商品名",
        goodsPrice:"200",
        goodsPlace:"广州",
        num:1
    },{
      id:2,
      goodsImage:"/images/lists02.jpg",
    goodsName:"商品名",
    goodsPrice:"200",
    goodsPlace:"广州",
    num:1
  },
  {id:3,
    goodsImage:"/images/lists03.jpg",
        goodsName:"商品名",
        goodsPrice:"200",
        goodsPlace:"广州",
        num:1
    },
    {
      id:4,
      goodsImage:"/images/lists04.jpg",
        goodsName:"商品名",
        goodsPrice:"200",
        goodsPlace:"广州",
        num:1
    },
    {id:5,
      goodsImage:"/images/lists05.jpg",
        goodsName:"商品名",
        goodsPrice:"200",
        goodsPlace:"广州",
        num:1
    },
      {id:6,
        goodsImage:"/images/lists06.jpg",
        goodsName:"商品名",
        goodsPrice:"200",
        goodsPlace:"广州",
        num:1
    }
  ],
  totalData:0
  },
  //数量加一
  add(option){
    console.log(option.target.dataset.index)
    var index=option.currentTarget.dataset.index;
    var num=this.data.goodsList[index].num +1; //获取数量
    this.data.goodsList.some((item,i)=>{
      if(i == index){
        item.num = num;
      }
    })
    this.setData({
      goodsList:this.data.goodsList
    })
    this.getTotal();
  },
  //数量减一
  sub(option){
    var index = option.target.dataset.index;
    var num=this.data.goodsList[index].num;
    var key="goodslist["+index+"].num";
    num = num <= 1? 1:num-1;
    this.data.goodsList.some((item,i)=>{
      if(i == index){
        item.num = num;
      }
    })
    this.setData({
      goodsList:this.data.goodsList
    })
    this.getTotal();
  },
  //删除数据
  del(option){
    console.log(option.currentTarget.dataset.index);
    var index=option.currentTarget.dataset.index;
    this.data.goodsList.splice(index,1);//删除静态数据
    this.setData({
      goodsList:this.data.goodsList //更新最新数据
    })
    this.getTotal();
  },
  //计算总价格
  getTotal(){
    var goodsList = this.data.goodsList;
    if(!goodsList.length){
      return;
      // this.setData({
      //   totalData:0
      // })
    }
    //计算总价格
    let data = goodsList.reduce((total,item)=>{
        return total + item.num * item.goodsPrice;
      },0)
    //更新价格
    this.setData({
      totalData:data
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
      console.log("函数自定被调用onShow");
      console.log(this.data)
      //获取数据
      let getCarData = wx.getStorageSync('goodsCatList');
      this.setData({
        goodsList:getCarData
      })
      this.getTotal();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //离开页面，更新数据缓存
    wx.setStorageSync('goodsCatList', this.data.goodsList)
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