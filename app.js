App({
  data:{
    isLogin: false,
    globalSession:tt.getStorageSync('globalSession')
  },
  onLaunch: function () {
    //如果不存在session的话
    tt.checkSession({
      success: function () {
        console.log("session not expired.");
        that.setData({
          isLogin: true,
        });
        that.__getUserInfo()
      },
      // 假如session失败则清除所有用户信息
      fail: function () {
        console.log("暂未登录")
        tt.removeStorage({
          key: "userinfo",
          success(res) {
            console.log(`removeuserinfo 调用成功`);
          },
          fail(res) {
            console.log(`removeuserinfo 调用失败`);
          },
        });
        tt.navigateTo({
          url: '/pages/page/login/login' // 指定页面的url;
        });
      },
    });

    
  }
})
