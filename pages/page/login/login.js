import _showModal from "../../../utils/_showModal";
Page({
  data: {
    code: tt.getStorageSync("login.code"),
    authed:false,
    isLogin: false,
  },
  onLoad: function () {
   this._checkSession()
  },
  

  _checkSession() {
    const that = this
    tt.getSetting({
      success(res) {
        let scopeValue = res.authSetting["scope.userInfo"];
        console.log(scopeValue)
        if (undefined === scopeValue || null === scopeValue || scopeValue) {
        
          that.setData({
            authed:true
          })
          
        } 
      },
    });
  },
  loginByFeishu: function () {
    
    
    if (this.data.authed) {
      this.__login()
     
      tt.switchTab({
        url: '/pages/page/index/index' // 指定页面的url;
      });
    } else {
      this.authorizeWithUserInfo({
        scope: "scope.useruserInfo",
        guideTips: "小程序需要使用你的个人信息？",
        success() {
          tt.switchTab({
            url: `/pages/page/index/index`,
            success(res) {
              console.log("---已获得用户信息");
            },
            fail(res) {
              console.log(`navigateTo 调用失败`, res);
            },
          });
        },
      });
    }
  },

  // 弹出权限请求框

  authorizeWithUserInfo(params) {
    _showModal({
      title: "权限请求",
      content: params.guideTips,
      confirmText: "去设置",
      confirmCb() {
        tt.openSetting({
          success(res) {
            if (res.authSetting[params.scope]) {
              params.success();
            } else {
              console.log("请求被拒绝");
            }
          },
          fail() {
            console.log("无法打开设置");
          },
        });
      },
    });
  },
//获取用户信息
  __getUserInfo: function () {
    const that = this;

    tt.getUserInfo({
      success: function (res) {
        console.log(res);
        tt.setStorageSync('userinfo', res.userInfo);
      },
      fail: function () {
        console.log("获取用户信息失败");
      },
    });
  },

  // 未登录时登录
  __login: function () {
    const that = this;
    tt.login({
      success: function (res) {
        if (res.code) {
          that.setData({
            hasLogin: true,
            code: res.code,
          });

          try {
            tt.setStorageSync("login.code", res.code);
            that.__getUserInfo();
            console.log("登录成功")
          } catch (error) {
            console.log(`setStorageSync failed`);
          }
        } else {
          tt.showModal({
            title: "未能正确获取code",
          });
        }
      },
      fail: function () {
        tt.showModal({
          title: "登录失败.",
        });
      },
    });
  },
});
