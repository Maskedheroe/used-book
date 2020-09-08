// pages/messageBoard/messageBoard.js
const  app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  evaSubmit:function(e){
    let data=e.detial.value;
    wx.request({
      url: 'http://sunshine-sun.cn:8080/comment/add',
      method: 'POST',
      data: {
        bid: 0,
        content: data.evaContent,
        uid: 0
      },
      success(res) {
        if (res.data.code === 200) {
          //保存返回的数据到全局对象
          app.globalData.userInfo = res.data.data;
          wx.showToast({
            title: '留言成功',
            icon: 'success'
          });
          //跳转页面
          wx.navigateTo({
            url: '/pages/details/details',
          });
        }
      }
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