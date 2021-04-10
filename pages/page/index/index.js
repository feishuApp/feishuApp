const date = new Date()
const years = []
const months = []
const days = []
const hours = []
for (let i = 2021; i <= date.getFullYear()+2; i++) {
	years.push(i)
}
for (let i = 1; i <= 12; i++) {
	months.push(i)
}
for (let i = 1; i <= 31; i++) {
	days.push(i)
}
for (let i = 1; i <= 24; i++) {
	hours.push(i)
}

Page({
  data: {
    isshow1: true,
    isshow2: true,
    create:false,
    join:false,
    years: years,
		year: date.getFullYear(),
		months: months,
		month: date.getMonth(),
		days: days,
		day: date.getUTCDay(),
    hours:hours,
    hour:date.getUTCHours(),
		value: [9999, 2, 3, 11],
    color:['','','','','']
  },
  bindChange: function (e) {
		const val = e.detail.value
		this.setData({
			year: this.data.years[val[0]],
			month: this.data.months[val[1]],
			day: this.data.days[val[2]],
      hours:this.data.hours[val[3]]
		})
	},
  onLoad: function () {

  },
  fun1:function() {
    var _this = this
    if (_this.data.isshow1 == false)
     { _this.setData({ isshow1: true,create:false })}
    else
      {_this.setData({ isshow1: false,create:true })
    }
  },
fun2:function() {
    var _this = this
    if (_this.data.isshow2 == false)
      _this.setData({ isshow2: true,join:false })
    else
      _this.setData({ isshow2: false,join:true })
  },
  cancel(){
    let _this=this
    _this.setData({ isshow1: true,create:false,isshow2: true,join:false })
  },
  subOK(){
    //上传数据
    tt.showModal({
      showCancel:false,
      content:'发布成功！',
      confirmText:'好的'
    })
  },
  input:function(event){
    let index=event.currentTarget.dataset.id
    console.log(index)
    let name='color['+index+']'
    this.setData({[name]:'#6495ED'})
    },
    uninput:function(event){
      let index=event.currentTarget.dataset.id
      console.log(index)
      let name='color['+index+']'
    this.setData({[name]:'#eeead9'})
    }
})