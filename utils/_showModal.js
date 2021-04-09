/**
 * @param  {string} title='' 模态框名称
 * @param  {string} content='' 内容
 * @param {function} confirmCb 成功回调
 * @param {function} cancelCb 成功回调
 */
function _showModal({title='',confirmText='确定',content='',confirmCb,cancelCb}){

    tt.showModal({
        title,
        content ,
        confirmText,
        success (res) {
            if (res.confirm) {
                console.log('用户确认');
               confirmCb&&confirmCb()
            } else if (res.cancel) {
                console.log('取消')
            } else {
                // what happend?
                    cancelCb&&cancelCb()
            }
        },
        fail (res) {
            console.log(`title为${title}showModal调用失败`);
        }
    });
}

export default _showModal