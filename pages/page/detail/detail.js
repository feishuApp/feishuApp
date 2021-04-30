Page({
    data:{
        activid:"",
        nickName:"mingliu",
        descImgSrc:["https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF","https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF","https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF","https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF",],
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
    }
})