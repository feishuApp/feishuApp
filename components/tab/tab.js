Component({
    data:{
        textArr:["热门活动","线下聚会","剧本杀"],
        activeOne:0,
    },
    methods:{
        itemChange:function(e){
            this.setData({
                activeOne:e.currentTarget.dataset.index
            })
        },
        _borderBtmClr:function(e){
            
        }
    }
})