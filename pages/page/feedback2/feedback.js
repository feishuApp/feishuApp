Page({
    formSubmit: function (e) {
        if(e.detail.value.input!=""){
           tt.request({
            url: 'xxxxxx/feedback',
            data: {
              'feedback': e.detail.value.input,
            },
            method: 'post',
            header: {
              'content-type': 'application/json'
            }
        })
        tt.showModal({
            title: '提示',
            content:'感谢您的反馈，我们已经成功收到了您的信息！',
            showCancel:false,
            confirmText:'不客气~',
          })
          }
          else{
            tt.showModal({
                title: '提示',
                content:'请先输入文字',
                showCancel:false,
                confirmText:'好的',
              })
          }
}
})
