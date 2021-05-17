import {modifyUserData} from '../../../networks/index'
Page({
    data:{
        birthDate:"",
        dateStart:"1980-01-01",
        dateEnd:"2010-01-01",
        genderArr:["男","女"],
        descAndInfo:"",
        index:0,
        nickName:"",
        avatarUrl:tt.getStorageSync('userinfo').avatarUrl,
    },
    // "open_id":"this is open_id",
    // "name": "我是谁",
    // "description":"简介",
    // "gender":1,
    // "avatarUrl":"url.."
    chooseAvatar:function(e){
        const that = this
        tt.chooseImage({
            sourceType: ['album'], // PC端无效
            count: 1,
            sizeType:['compressed'],
            success (res) {
                console.log(res.tempFilePaths);
                    that.setData({
                    avatarUrl:res.tempFilePaths[0]
                })
            },
            fail (res) {
                console.log(`chooseImage 调用失败`);
            }
        });
    },
    modifyInfo:function(){
        modifyUserData({
            open_id:tt.getStorageSync('open_id'),
            name:this.data.nickName,
            gender:this.data.index+1,
            avatarUrl:this.data.avatarUrl,
            description:this.data.descAndInfo,
        })
        .then(res=>{
            tt.showToast({
              title: '修改成功', // 内容
            });
            console.log(res)
        })
        .catch(err=>{
            tt.showToast({
                title: '修改失败', // 内容
                icon:"none",    
              });
        })
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