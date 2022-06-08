// pages/details/details.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgs:[
            // "/images/goods01.jpg",
            // "/images/goods02.jpg",
            // "/images/goods03.jpg",
            // "/images/goods04.jpg",
         ],
         goods:{
            //  id:2,
            //  goodsImages:"/images/banner01.jpg",
            //  goodsName:"商品名称123",
            //  goodsimgs:[
            //     "/images/goods01.jpg",
            //     "/images/goods02.jpg",
            //     "/images/goods03.jpg",
            //     "/images/goods04.jpg",
            //  ],
            //  goodsPrice:200,
            //  goodsPriceold:300,
            //  goodsDetails:'/images/IMG_0466.jpg'
         },
         num:0,
         nums:0,
         collect:false
    },
    setCollect(){
       
    },
    // dianzan(){
    //     let imgs=;
       
    //     this.setData({
    //         'this.data.aixin[0].img':'/images/icon-aixin1.png',
    //         "this.data.aixin[0].text":"已收藏"
    //       })
    //       console.log(this.data.aixin[0].img);
    //       console.log(this.data.aixin[0].text);
    // },
    toHome(){
        wx.switchTab({
          url: '/pages/home/home',
        })
    },
    toCar(){
        wx.switchTab({
          url: '/pages/car/car',
        })
    },
    // wx.getStorageSync //添加数据 修改数据 
        // wx.setStorageSync（"key","data"） key必须唯一
        // wx.removeStorageSync //删除数据
        // wx.getStorageSync //获取数据
        // wx.clearStorageSync //清除所有数据
         // wx.setStorageSync('goodsList', "商品数据")
        // wx.removeStorageSync('goodsList')

    //加入购物车
    setCarData(){
        // console.log(this.data.goods.goodsImages)
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
    //收藏
    setcollect(){
        if(this.data.collect){
            this.setData({
                collect: !this.data.collect
            })
            // console.log(true);
        }else{
            this.setData({
                collect: !this.data.collect
            })
        //    console.log(this.data.goods.goodsImages)
        // 购物车数据
        let A=true
        let CollectLists={
        id:this.data.goods.id,
        goodsImage:this.data.goods.goodsImages,
        goodsName:this.data.goods.goodsName,
        goodsPrice:this.data.goods.goodsPrice,
        collect:A

        };    
        //获取数据
        let goodsCollectList=wx.getStorageSync('goodsCollectList');
        if(goodsCollectList){
            let index = goodsCollectList.findIndex(item=>item.id == this.data.goods.id);
            //有数据
            if(index != -1){
                //判断是否有相同的数据
                goodsCollectList[index].num +=1;
            }else{
                //如果没有相同数据，添加数据
                goodsCollectList.push(CollectLists);
            }
            //更新数据
            wx.setStorageSync('goodsCollectList', goodsCollectList)
        }else{
            //如果没有数据，添加数据
        wx.setStorageSync('goodsCollectList',[CollectLists]);

        }
        this.setData({
            num:wx.getStorageSync('goodsCollectList').length
        })
        }
        let indexs=wx.getStorageSync('goodsCollectList')

     
        
    },
    //删除数据
    delcollect(option){
        console.log(option.currentTarget.dataset.index);
        var index=option.currentTarget.dataset.index;
        this.data.goodsList.splice(index,1);//删除静态数据
        this.setData({
          goodsList:this.data.goodsList //更新最新数据
        })
        this.getTotal();
      },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log(options.id);
        let id = options.id;
        let _this=this;
        wx.request({
          url: 'http://47.115.51.185/api/product/detail/'+id,
          success(res){
            //   console.log(res.data.data.storeInfo.slider_image);
            let {id,image,description,price,ot_price,store_name,slider_image} = res.data.data.storeInfo;
            _this.setData({
             "goods.id":id,
             "goods.goodsImages":image,
             "goods.goodsName":store_name,
             "goods.goodsImgs":slider_image,
             "goods.goodsPrice":price,
             "goods.goodsPriceold":ot_price,
             "goods.goodsDetails":description
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
        this.setData({
            num:wx.getStorageSync('goodsCatList').length
        })
        console.log(this.data.collect)
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
      wx.setStorageSync('collect',this.data.collect);
      console.log(wx.getStorageSync('collect'));
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