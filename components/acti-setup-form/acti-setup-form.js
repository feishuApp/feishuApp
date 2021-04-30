import {formatDate,formatTime,formatDateYearLater} from '../../utils/timeFormat';
import {CreateActivity} from '../../networks/index'
import _showModal from '../../utils/_showModal';
Component({
    data:{
        // 活动发起时间地点
        date:formatDate(),
        time:formatTime(),
        timeStart:"00:00",
        timeEnd:'24:00',
        dateEnd:formatDateYearLater(),
        dateStart:formatDate(),
        // 关于活动的描述
        desc:'',
        //活动地点
        position:"",
        name:''

    },
    attached:function(){
     
    },
 
    methods:{


    //todo:此处过于频繁setData，实际上应该考虑使用时间委托，即把监听器放置顶层dom，通过冒泡机制捕捉实现监听
    //对于input组件许哦封装

    _bindDescChange:function(e){
        console.log(e.detail.value)
        this.setData({
            desc:e.detail.value
        })
    },
         // 改变picker项选中值
    _bindDateChange:function(e){
        console.log("picker的值"+e.detail.value)
        this.setData({
            date: e.detail.value
        })
    },
    _bindposChange:function(e){
        this.setData({
            position: e.detail.value
        })
    }
    ,
    _bindNameChange:function(){
        console.log("nameChange")
        this.setData({
            name: e.detail.value
        })
    },
    _bindTimeChange:function(e){
        console.log("timeChange")
  
        this.setData({
            time: e.detail.value
        })
    },
    _bindSetup:function(){
        //发起活动
        CreateActivity({
            name:this.data.name,
            description:this.data.sesc,
            position:this.data.position,
            start:this.data.timeStart,
        })
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{

        })
    }
    },
   
})