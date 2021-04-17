import {formatDate,formatTime,formatDateYearLater} from '../../utils/timeFormat';
Component({
    data:{
        // 活动发起时间地点
        date:formatDate(),
        time:formatTime(),
        timeStart:formatTime(),
        timeEnd:'24:00',
        dateEnd:formatDateYearLater(),
        dateStart:formatDate(),
        // 关于活动的描述
        desc:'',

    },
    attached:function(){
     
    },
 
    methods:{

    _bindDescChange:function(e){
        console.log(e.detail.value)
        setData({
            desc:e.detail.value
        })
    },
         // 改变picker项选中值
    _bindPickerChange:function(e){
        console.log("picker的值"+e.detail.value)
        this.setData({
            date: e.detail.value
        })
    }
    },
   
})