import {FindActivityByCode} from '../../../networks/index'
Page({

  data:{
    isLogin: false,
    globalSession:tt.getStorageSync('globalSession'),
    isshow1: true,
    isshow2: true,
    create:false,
    join:false,
    searchCode:"",
    color:['','','','','']
  },
  _bindCodeChange:function(e){
    this.setData({
      searchCode: e.detail.value
  })
  },
  // 发起活动按钮触发
  onSettingUp:function() {
    let _this = this
    if (_this.data.isshow1 == false)
     { _this.setData({ isshow1: true,create:false })}
    else
      {_this.setData({ isshow1: false,create:true })
    }
    
  },
  //查找活动
  findActive:function(){
    FindActivityByCode({invite_code:this.data.searchCode})
    .then(res=>{
      if(res.code==1){
      const {id} = res.data
        
      tt.navigateTo({
        url: `/pages/page/detail/detail?activid=${this.data.searchCode}` // 指定页面的url;
      });
      }
      else{
        tt.showToast({
          title: '活动不存在', // 内容 
          icon:"none"
        });
      }
    })
    .catch(err=>{
      tt.showToast({
        title: '出错了', // 内容 
        icon:"none"
      });
    })
  },
  // 参与活动按钮触发
onJoing:function() {
    let _this = this
    if (_this.data.isshow2 == false)
      _this.setData({ isshow2: true,join:false })
    else
      _this.setData({ isshow2: false,join:true })
  },
  cancel(){
    let _this=this
    _this.setData({ isshow1: true,create:false,isshow2: true,join:false })
  },

  input:function(event){
    let index=event.currentTarget.dataset.id
    console.log(index)
    let name='color['+index+']'
    this.setData({[name]:'#6495ED'})
    },
    uninput:function(event){
      let index=event.currentTarget.dataset.id
      console.log(index)
      let name='color['+index+']'
    this.setData({[name]:'#eeead9'})
    },
  onLoad:function(){
    let that = this
    console.log(that)
    //如果存在session的话
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
