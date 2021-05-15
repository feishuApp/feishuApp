import { getActivityData,} from '../../../networks/index';
const blurColor = "#6495ED"
const unBlurColor ="#FFA500"
Page({
    data: {
      listArry:[],
      color: '',
      reactBottomloading:false
    },
    onLoad: function () {
      const that = this
      //请求主页数据
      getActivityData()
      .then(res=>{
        console.log(res)
        that.setData({
          listArry:res,
        })
      })
      .catch((err)=>{
        console.log("err")
        tt.showToast({
          title: err,
          duration: 1000,
          icon:"none",
      });
      })
    },
    // 跳转到detail页
    bindtap:function(e){
        console.log(e.target)
      tt.navigateTo({
        url: `/pages/page/detail3/detail?activid=${e.target.dataset.activid}` // 指定页面的url;
      });
    },
    _input:function(){
    this.setData({color:blurColor})
    },
    _uninput:function(){
    this.setData({color:unBlurColor})
    },
    onReachBottom: function() {
      // 页面触底时执行
      console.log("reach bottom")
      this.setData({
        
      })
      this.setData({
        listArry:[...this.data.listArry,...this.data.listArry]
      })
    },
})
