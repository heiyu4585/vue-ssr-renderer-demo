import Vue from 'vue'
import Router from 'vue-router'
import indexList from '@/view/index_list'
import pageList from '@/view/page_list'

Vue.use(Router)

export default new Router({
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
