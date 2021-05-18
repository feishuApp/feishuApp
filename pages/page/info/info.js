import {modifyUserData} from '../../../networks/index'
import {getUserInfo} from '../../../networks/index'
Page({
    data:{
        birthDate:"",
        dateStart:"1980-01-01",
        dateEnd:"2010-01-01",
        genderArr:["男","女"],
        descAndInfo:"",
        index:0,
        nickName:tt.getStorageSync('userinfo').Name,
        avatarUrl:tt.getStorageSync('userinfo').avatarUrl,
    },

    chooseAvatar:function(e){
        const that = this
        tt.chooseImage({
            sourceType: ['album'], // PC端无效
            count: 1,
            sizeType:['compressed'],
            success (res) {
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
            let open_id = tt.getStorageSync('open_id');
            getUserInfo({open_id,})
            .then(res=>{
             if(res.code==1){
              console.log(res)
              tt.setStorageSync('userinfo', res.data);
             }
             else{
               tt.showToast({
                 title: '获取个人信息失败', // 内容
               });
             }
            })
        })
        .catch(err=>{
            tt.showToast({
                title: '修改失败', // 内容
                icon:"none",    
              });
        })
    },
    bindPickerChange: function (e) {
      
        this.setData({
            index: e.detail.value
        })
    },
    bindDescChange:function(e){
       
        this.setData({
            descAndInfo:e.detail.value
        })
    },
    bindnickNameChange:function(e){
       
        this.setData({
            nickName:e.detail.value
        })
    },
    bindBirthdateChange:function(e){
       
        this.setData({
            birthDate:e.detail.value
        })
    }
})