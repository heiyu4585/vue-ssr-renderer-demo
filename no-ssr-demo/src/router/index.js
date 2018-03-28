import Vue from 'vue'
import Router from 'vue-router'
import indexList from '@/components/index_list'
import pageList from '@/components/page_list'

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
