let datas=require('./data.js');
Page({
    data: {
      listArry:[],
      color: ''
    },
    onLoad: function () {
      this.setData({
        listArry:datas.list_data
      })
    },
    input:function(){
    this.setData({color:'#6495ED'})
    },
    uninput:function(){
    this.setData({color:'#FFA500'})
    }
})
