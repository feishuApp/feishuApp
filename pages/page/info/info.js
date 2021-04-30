Page({
    data:{
        birthDate:"",
        dateStart:"1980-01-01",
        dateEnd:"2010-01-01",
        genderArr:["男","女"],
        descAndInfo:"",
        index:0,
        nickName:"",
        avatarUrl:"https://p6-lark-file.byteimg.com/img/lark.avatar/a43e7609-ea41-436d-bf5e-1efdf18759bg~72x72.png"
    },
    chooseAvatar:function(e){
        const that = this
        tt.chooseImage({
            sourceType: ['album'], // PC端无效
            count: 1,
            sizeType:['compressed'],
            success (res) {
                console.log(res.tempFilePaths);
                    that.setData({
                    avatarUrl:res.tempFilePaths
                })
            },
            fail (res) {
                console.log(`chooseImage 调用失败`);
            }
        });
    },
    bindPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value
        })
    },
    bindDescChange:function(e){
        console.log(e.detail.value)
        this.setData({
            descAndInfo:e.detail.value
        })
    },
    bindnickNameChange:function(e){
        console.log(e.detail.value)
        this.setData({
            nickName:e.detail.value
        })
    },
    bindBirthdateChange:function(e){
        console.log(e.detail.value)
        this.setData({
            birthDate:e.detail.value
        })
    }
})