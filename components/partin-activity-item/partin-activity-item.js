Component({
    behaviors: [],
    properties: {
     activityName:String,
     goingOn:Boolean,
    },
    // 私有数据，可用于模版渲染
    data: {},
    // 生命周期函数，可以为函数，或一个在 methods 段中定义的方法名
     attached: function () { 
     console.log("load")
    },
    ready: function() { },
    // 组件自定义方法
    methods: {
      
    }
  })