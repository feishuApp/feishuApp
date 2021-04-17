Page({
    data:{
        activid:""
    },
    onLoad (options) {
        console.log(options)
        let activid = options.activid || '';
        this.setData({
            activid,
        })
    }
})