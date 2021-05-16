import {FindActivityByCode} from '../../../networks/index';
Page({
    data:{
        outOfTime:false,
        activid:"",
        nickName:"mingliu",
        tags:["游戏","二次元"],
        descImgSrc:["https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF",
    ],
        desc:"Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。",
        avatarUrl:"https://p9-lark-file.byteimg.com/img/lark.avatar/a43e7609-ea41-436d-bf5e-1efdf18759bg~72x72.png",
    },
    onLoad (options) {
        console.log(options)
        let activid = options.activid || '';
        //此处记录的活动id十分重要
        this.setData({
            activid,
        })
        FindActivityByCode({invite_code:this.data.activid})
        .then(res=>{
            if(res.code==1){
                this.setData({
                    desc:res.data.description,
                    tags:res.data.tags,
                    
                })
                
                // description: "伟大的哇"
                // endAt: ""
                // id: 16
                // name: "剧本杀"
                // startAt: "20:59;2021-07-21"
                // tags: (2) ["二次元", "游戏"]
            }
            else{
                tt.showToast({
                  title: '出错了', // 内容
                  icon:'none',
                });
            }
        })
        .catch(err=>{
            tt.showToast({
              title: '出错了', // 内容
              icon:'none',
            });
        })
    },


    previewPic(e){
        const that = this
        that.setData({
            currentIndex:e.currentTarget.dataset.index
        })

        let index = e.currentTarget.dataset.index
        tt.previewImage({
            urls: that.data.descImgSrc,
            current: that.data.descImgSrc[index],
            success (res) {
                console.log(`previewImage 调用成功`);
            },
            fail (res) {
                console.log(`previewImage 调用失败`);
            }
        });
    }
})