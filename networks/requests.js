/**
 * 
 * @param {boolean} showLoading 是否显示loading
 * @param {string} method 请求方法
 * @param {data} 请求数据
 */
const ttRequest = ({showLoading = true,url,method='GET',data})=>{

    const baseUrl = "https://www.liu12138.cn";
    showLoading&&tt.showLoading({
      title: 'loading...', // 内容
        mask:true,
    });
   

  return new Promise((resolve,reject)=>{
    tt.request({
        url:baseUrl+url, // 目标服务器url
        method,
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

}


export default ttRequest