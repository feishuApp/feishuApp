import requests from './requests';
const getActivityData =async ()=>{
  return requests({url:"/activity"});
}
const getBannerData =async ()=>{
    return requests({url:"/banner"});
  }
export {
    getActivityData,
    getBannerData
}