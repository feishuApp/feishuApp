 function formatTime(){
    let now = new Date()
    hour = now.getHours()<10?'0'+now.getHours():now.getHours();
    min = now.getMinutes()<10?'0'+now.getMinutes():now.getMinutes();
    return hour+":"+min
}

function formatDate(){
    let now = new Date()
    year = now.getFullYear()<10?'0'+now.getFullYear():now.getFullYear();
    month = now.getMonth()+1<10?'0'+now.getMonth():now.getMonth();
    day = now.getDay()<10?'0'+now.getDay():now.getDay();
    return [year,month,day].join("-")
}
// 返回一年后的时间
function formatDateYearLater(){
    let now = new Date()
    year = now.getFullYear()<10?'0'+now.getFullYear()+1:now.getFullYear()+1;
    month = now.getMonth()+1<10?'0'+now.getMonth():now.getMonth();
    day = now.getDay()<10?'0'+now.getDay():now.getDay();
    return [year,month,day].join("-")
}
export {
    formatDate,
    formatTime,
    formatDateYearLater
}