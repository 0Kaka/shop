// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs:[
     "/images/banner01.jpg",
     "/images/banner02.jpg",
     "/images/banner03.jpg",
     "/images/banner04.jpg",
  ],
    iconArray:[
      {url:"/images/icon-qiandao.png",text:"签到"},
      {url:"/images/icon-fujin.png",text:"附近"},
      {url:"/images/icon-zhanhui.png",text:"展会"},
      {url:"/images/icon-fuli.png",text:"福利"},
      {url:"/images/icon-muma.png",text:"玩乐"},
      {url:"/images/icon-tiyu.png",text:"体育"},
      {url:"/images/icon-xingxing.png",text:"周边"},
      {url:"/images/icon-qinzi.png",text:"亲子"},
    ],
    goodsList:[
//       {goodsImage:"/images/lists01.jpg",
//         goodsName:"商品名",
//         goodsPrice:"￥200",
//         goodsPlace:"广州"
//     },{goodsImage:"/images/lists02.jpg",
//     goodsName:"商品名",
//     goodsPrice:"￥200",
//     goodsPlace:"广州"
// },
// {goodsImage:"/images/lists03.jpg",
//         goodsName:"商品名",
//         goodsPrice:"￥200",
//         goodsPlace:"广州"
//     },
//     {goodsImage:"/images/lists04.jpg",
//         goodsName:"商品名",
//         goodsPrice:"￥200",
//         goodsPlace:"广州"
//     },
//     {goodsImage:"/images/lists05.jpg",
//         goodsName:"商品名",
//         goodsPrice:"￥200",
//         goodsPlace:"广州"
//     },
//       {goodsImage:"/images/lists06.jpg",
//         goodsName:"商品名",
//         goodsPrice:"￥200",
//         goodsPlace:"广州"
    
//     }
    ]
  },
  setCarData(){
    console.log(this.data.goods.goodsImages)
    // 购物车数据
    let carLists={
    id:this.data.goods.id,
    goodsImage:this.data.goods.goodsImages,
    goodsName:this.data.goods.goodsName,
    goodsPrice:this.data.goods.goodsPrice,
    num:1
    };    
    //获取数据
    let goodsCatList=wx.getStorageSync('goodsCatList');
    if(goodsCatList){
        let index = goodsCatList.findIndex(item=>item.id == this.data.goods.id);
        //有数据
        if(index != -1){
            //判断是否有相同的数据
            goodsCatList[index].num +=1;
        }else{
            //如果没有相同数据，添加数据
            goodsCatList.push(carLists);
        }
        //更新数据
        wx.setStorageSync('goodsCatList', goodsCatList)
    }else{
        //如果没有数据，添加数据
    wx.setStorageSync('goodsCatList',[carLists]);

    }
    this.setData({
        num:wx.getStorageSync('goodsCatList').length
    })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let _this = this;
      wx.request({
        url: 'http://47.115.51.185/api/index',
        success(res){
          // console.log(res.data)
          // console.log(res.data.data.info)
          // console.log(res.data.data.menus)
          let {banner,menus} = res.data.data;
          let {bastList} =res.data.data.info; //商品列表
          // 便利数据结构
          bastList.forEach(item=>{
            let {id,image,price,store_name} = item;
            let data = {
              id:id,
              goodsImage:image,
              goodsName:store_name,
              goodsPlace:"广州",
              goodsPrice:price
            }
            _this.data.goodsList.push(data);
          })
          _this.setData({
            imgs:banner,
            iconArray:menus,
            goodsList:_this.data.goodsList
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