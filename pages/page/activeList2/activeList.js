Page({
  data:{
    arr:[
      {
        tag1:'12',
        tag2:'123',
        activeName:'playgame',
        founder:'Nancy',
        date:'1900-2-2',
        place:'where to play'
      },
      {
        tag1:'12',
        tag2:'123',
        activeName:'playgame',
        founder:'Nancy',
        date:'1900-2-2',
        place:'where to play'
      },
      {
        tag1:'12',
        tag2:'123',
        activeName:'playgame',
        founder:'Nancy',
        date:'1900-2-2',
        place:'where to play'
      }
    ]
  },
bindtap:function(){
    tt.navigateTo({
        url: `../detail3/detail`,
    });
},
// onLoad: function (options) {
// let that=this
// var tmp=[]
// wx.request({
//   url: 'xxxx/getlist',
//   success:(data)=>{
//    
//     for(var i=0;i<xx;i++){
//       let obj={}
//       obj.tag1=
//       obj.tag2=
//       obj.activeName=
//       obj.founder=
//       obj.place=
//       tmp[i]=obj
//     }
//     this.setData({
//     arr:tmp
//     })
//   }
//需要如上动态获得数据
})
