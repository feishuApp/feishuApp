import {FindActivityById} from '../../../networks/index';
Page({
    data:{
        outOfTime:false,
        activid:"",
        nickName:"mingliu",
        tags:[],
        descImgSrc:["https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF",
    ],
        desc:"",
        avatarUrl:"https://p9-lark-file.byteimg.com/img/lark.avatar/a43e7609-ea41-436d-bf5e-1efdf18759bg~72x72.png",
    },
    onLoad (options) {
        let activid = options.activid || '';
        //此处记录的活动id十分重要
        this.setData({
            activid,
        })
        FindActivityById({id:this.data.activid,open_id:tt.getStorageSync('open_id')})
        .then(res=>{
            if(res.code==1){
                console.log(res.data)
                this.setData({
                    desc:res.data.description,
                    tags:res.data.tags,
                    avatarUrl:res.data.user_avatarUrl,
                })
                
                // description: "伟大的哇"
                // endAt: ""
                // id: 16
                // name: "剧本杀"
                // startAt: "20:59;2021-07-21"
                // tags: (2) ["二次元", "游戏"]
            }
            else{
                console.log(res)
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