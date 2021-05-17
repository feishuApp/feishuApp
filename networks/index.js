import requests from './requests';
const getActivityData =async ()=>{
  return requests({url:"/FindActiveActivities"});
}
const getBannerData =async ()=>{
    return requests({url:"/banner"});
  }
//登录首次获取session
const getSession = async(data)=>{
  return requests({url:"/Login2",data,method:"POST"})
}
//发起活动请求
const CreateActivity = async(data)=>{
  return requests({url:'/CreateActivity',data,method:"POST"});
}
const FindActivityByCode= async(data)=>{
    return requests({url:"/FindActivityByCode",method:'GET',data});
}

//修改用户信息
const modifyUserData = async(data)=>{
  return requests({url:"/SetUserInfo",method:"POST",data});
}
export {
    getActivityData,
    getBannerData,
    getSession,
    CreateActivity,
    FindActivityByCode,
    modifyUserData
}