import Vue from 'vue'
import Router from 'vue-router'

let indexList= () => import('@/view/index_list') // 改为异步组件
let pageList= () => import('@/view/page_list') // 改为异步组件

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history', // 注意这里也是为history模式
    routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: indexList
      },
      {
        path: '/pageList/:id',
        name: 'pageList',
        component: pageList,
      },
    ]
  })
}
