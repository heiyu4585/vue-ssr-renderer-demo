import Vue from 'vue'
import Router from 'vue-router'
import indexList from '@/view/index_list'
import pageList from '@/view/page_list'

Vue.use(Router)

export default new Router({
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
