/**
 * 
 * @param {boolean} showLoading 是否显示loading
 * @param {string} method 请求方法
 * @param {data} 请求数据
 */
const ttRequest = ({showLoading = true,url,method='GET',data,timeout=5000})=>{

    const baseUrl = "https://fskn6a.api.larkfn.com";
    showLoading&&tt.showLoading({
      title: 'loading...', // 内容
        mask:true,
    });

    //设置timeoutPromise,当时间超时，显示错误

  const timerPromise = new Promise((resolve, reject) => {
      setTimeout(function(){
        reject("请求超时！")
      },timeout)
    })
  const requestsPromise =  new Promise((resolve,reject)=>{
    tt.request({
        url:baseUrl+url, // 目标服务器url
        method,
        data,
        success: (res) => {
            let resp = res
          tt.hideLoading({
              success (res) {
                resolve(resp.data)
              },
              fail (res) {
                  console.log(`hideLoading 调用失败`);
              }
          });
        },
        fail:(reason)=>{
            console.log(`请求网络${url}失败，错误信息为${reason.toString()}`)
            tt.hideLoading({
              success (res) {
              },
              fail (res) {
                  console.log(`hideLoading 调用失败`);
              }
          });
          reject(reason)
        }
      });
  
  })
  return Promise.race([requestsPromise,timerPromise])
}


export default ttRequest