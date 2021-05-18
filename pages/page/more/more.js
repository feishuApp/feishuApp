import { getActivityData,} from '../../../networks/index';
const blurColor = "#6495ED"
const unBlurColor ="#FFA500"
Page({
    data: {
      listArry:[],
      color: '',
      skip:0,
      reactBottomloading:false,
      flag:true,
    },
    onLoad: function () {
      const that = this
      //请求主页数据
      getActivityData()
      .then(res=>{
        console.log(res)
        that.setData({
          listArry:res.data,
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
    navigatorToDetail:function(e){
      
      tt.navigateTo({
        url: `/pages/page/detail/detail?activid=${e.target.dataset.activid}` // 指定页面的url;
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
      
      if(this.data.flag){
        this.setData({
          skip:this.data.skip+1,
          flag:false,
          reactBottomloading:true,
        })
        
        getActivityData({limit:10,offset:this.data.skip})
        .then(res=>{
          console.log(res)
          if(res.data.length==0){
            tt.showToast({
              title: '小主，暂无更多活动', // 内容
              icon:"none",
            });
          }
         this.setData({
            listArry:Object.assign({},this.data.listArry,res.data),
            flag:true,
            reactBottomloading:false,
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
      }
    },
})
