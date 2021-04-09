const ttRequest = ({showLoading = true,url,method='GET',data})=>{

    const baseUrl = "https://www.liu12138.cn/";
    tt.showLoading({
        title: '请求中，请稍候...',
        success (res) {
            console.log(`${res}`);
        },
        fail (res) {
            console.log(`showLoading 调用失败`);
        }
    });

    tt.request({
      url:baseUrl+url, // 目标服务器url
      method,
      success: (res) => {
        tt.hideLoading({
            success (res) {
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
      }
    });


}

export default requests