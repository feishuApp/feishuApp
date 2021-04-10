let datas=require('./data.js');
Page({
    data: {
<<<<<<< HEAD
      
    },
    onLoad: function () {
     
=======
      listArry:[],
      color: ''
    },
    onLoad: function () {
      this.setData({
        listArry:datas.list_data
      })
>>>>>>> dev2
    },
    input:function(){
    this.setData({color:'#6495ED'})
    },
    uninput:function(){
    this.setData({color:'#FFA500'})
    }
})
