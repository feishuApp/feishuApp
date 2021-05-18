import {GetUserJoinedActivity,getUserCreatedActivity} from '../../../networks/index'
 Page({
  data:{
    //参与过的活动
     listData:[
     
      
     ]
  },
  onLoad:function(){
    getUserCreatedActivity({open_id:tt.getStorageSync('open_id')})
    .then(res=>{
      this.setData({listData:
        res.data})
    })
  }
})
