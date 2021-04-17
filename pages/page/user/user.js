Page({
    data:{
     userinfo:{
         nickName:'未登录',
         avatarUrl:""
     }
    },

    onShow: function(){
      console.log("show")
        let thats = this
    
          tt.getStorage({
            key: 'userinfo', // 缓存数据的key
            success: (res) => {
              console.log(res.data)
              thats.setData({
                  userinfo:Object.assign({},thats.data.userinfo,res.data)
              })
              console.log(thats.data.userinfo)
            }
          });
    } ,
    
  
    
  })
  