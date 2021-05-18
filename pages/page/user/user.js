import {getUserInfo} from '../../../networks/index'
Page({
    data:{
     userinfo:{
         Name:'未登录',
         avatarUrl:"",
         Description:"这个人很懒，什么都没有留下"
     }
    },

    onShow: function(){
        console.log(this.data.userinfo.avatarUrl)
        let thats = this
        if(!tt.getStorageSync('userinfo')){
          let open_id = tt.getStorageSync('open_id');
          getUserInfo({open_id,})
          .then(res=>{
           if(res.code==1){
            console.log(res)
            tt.setStorageSync('userinfo', res.data);
            thats.setData({
              userinfo:Object.assign({},thats.data.userinfo,res.data)
            })
           }
           else{
             tt.showToast({
               title: '获取个人信息失败', // 内容
              
             });
           }
          })
        }
         else{
          
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
         }
    } ,
    
  
    
  })
  