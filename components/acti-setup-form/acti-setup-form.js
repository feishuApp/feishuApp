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
        name:'',
        tags:[{
            name:'二次元',
            active:false
        },
        {
            name:'游戏',
            active:false
        },
        {
            name:'剧本杀',
            active:false
        },
        {
            name:'音乐',
            active:false
        },
        
    ],
        choosedTag:[],

    },
    attached:function(){
     
    },
 
    methods:{

    
    chooseTag:function(e){
        console.log(e.target)   
       let {index} = e.target.dataset
        //其中含有这个标签
        let {tags} = this.data
        tags[index].active = !tags[index].active
        console.log(tags)
        this.setData({
            tags:tags,
        })
    },

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
    _bindNameChange:function(e){
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
        if(tt.getStorageSync('open_id')==""){
            tt.showToast({
              title: '请先登录！', // 内容
              icon:"none",
            });
            return
        }
        let {name,desc,position,time,date} = this.data
        if([name,desc,position,time,date].some(v=>v==""||undefined||null)){
            tt.showToast({
                title: '请正确填写信息！', // 内容
                icon:"none",
              });
              return
        }
        const choosedTags = this.data.tags.filter(v=>v.active).map(v=>v.name)
        CreateActivity({
            name:this.data.name,
            description:this.data.desc,
            position:this.data.position,
            start:this.data.time+";"+this.data.date,
            end:"",
            open_id:tt.getStorageSync('open_id'),
            capacity:2,
            tags:choosedTags,
        })
        .then(res=>{
            if(res.code==1){
                tt.showToast({
                  title: `活动发起成功`, // 内容
                });
            }
        })
        .catch(err=>{
            tt.showToast({
                title: `出错了`, // 内容
              });
        })
    }
    },
   
})