import requests from './requests';
const getActivityData =async ()=>{
  return requests({url:"/FindActiveActivities"});
}
const getBannerData =async ()=>{
    return requests({url:"/banner"});
  }
//登录首次获取session
const getSession = async(data)=>{
  return requests({url:"/Login",data,method:"POST"})
}
//发起活动请求
const CreateActivity = async(data)=>{
  return requests({url:'/CreateActivity',data,method:"POST"});
}

export {
    getActivityData,
    getBannerData,
    getSession,
    CreateActivity
}