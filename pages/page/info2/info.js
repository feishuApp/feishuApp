Page({
    data:{
        jianjie:"我的简介是什么啊简介是什么啊",
        qianming:"我的签名mingming",
        birth:"2001-3-14",
        gender:'女',
        nickName:"名字zizi",
        avatarUrl:"https://p6-lark-file.byteimg.com/img/lark.avatar/a43e7609-ea41-436d-bf5e-1efdf18759bg~72x72.png"
    },
    // onLoad:function(){
    //     tt.request({
    //         url: 'xxxxx/getUsrInfo',
    //         method: 'GET',
    //         success:function(res) {
    //             console.log(typeof (res.data), res.data);
    //             this.setData({
    //                 jianjie: usr.jianjie,
    //                 qianming: usr.qianming,
    //                 birth: usr.birth,
    //                 gender: usr.gender,
    //                 nickName: usr.nickName,
    //                 avatarUrl: usr.avatarUrl
    //             })
    //              //需要将初始data的值设为空 数据由此处通过请求后台得到
    //             //需要将初始data的值设为空 数据由此处通过请求后台得到
    //             //需要将初始data的值设为空 数据由此处通过请求后台得到
    //         }
    //     })
    // },
    chooseAvatar:function(e){
        const that = this
        tt.chooseImage({
            sourceType: ['album'], 
            count: 1,
            sizeType:['compressed'],
            success (res) {
                    that.setData({
                    avatarUrl:res.tempFilePaths
                })
            }
        });
        //完成修改后图片的上传和保存 uploadFile
        //完成修改后图片的上传和保存 uploadFile
        //完成修改后图片的上传和保存 uploadFile


    },

    bindGenderChange: function (e) {
        let a=['男','女']
        this.setData({
            gender: a[e.detail.value]
        })
    },
    bindBirthdateChange:function(e){
        this.setData({
            birth:e.detail.value
        })
    },
    formSubmit: function (e) {
           tt.request({
            url: 'xxxxxx/changeUsrinfo',
            data: {
              'jianjie': e.detail.value.input,
              'qianming': e.detail.value.qianming,
              'birth': e.detail.value.birth,
              'gender': e.detail.value.gender,
              'nickName': e.detail.value.nickname
            },
            method: 'post',
            header: {
              'content-type': 'application/json'
            }
        })
        //需要完成后台url和后台修改数据
        //需要完成后台url和后台修改数据
        //需要完成后台url和后台修改数据

        tt.showToast({
            title: '修改成功'
          })

}

})