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
    //删除数据
    del(option){
      console.log(option.currentTarget.dataset.index);
      var index=option.currentTarget.dataset.index;
      this.data.goodsList.splice(index,1);//删除静态数据
      this.setData({
        goodsList:this.data.goodsList //更新最新数据
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
        //获取数据
        let getCollectData = wx.getStorageSync('goodsCollectList');
        this.setData({
          goodsList:getCollectData
        })
        this.getTotal();
    },
  
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
      //离开页面，更新数据缓存
      wx.setStorageSync('goodsCollectList', this.data.goodsList);  
      wx.getStorageSync('collect');

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