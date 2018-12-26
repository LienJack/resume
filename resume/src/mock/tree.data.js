export default {
  name: "技能",
  children:[
      {
          name:"前端工程师",
          children: [
              {
                  name: 'js',
                  collapsed:true,
                  children:[
                      { name:'es5'},
                      { name:'es6+'}
                  ]
              },
              { name: 'css' },
              { name: 'HTML5' },
              { 
                  name: '工具',
                  collapsed:true,
                  children: [
                      { name: 'vue.js' },
                      { name: 'zepto' },
                      { name: 'webpack' },
                      { name: 'node' },
                  ]
              },

          ],
      },
      {
          name: '软件工程师',
          children: [
              { name:'数据结构' },
              { name:'网络' },
              { name:'组成原理'},
              { name: '算法' }
          ]
      },
      {
          name:'个人能力',
          // collapsed:true,
          children: [
              { name: '知识管理' },
              { name: '时间管理' },
              { name: '压力管理' },
              { name: '沟通协调'}
          ]
      }
  ]
}