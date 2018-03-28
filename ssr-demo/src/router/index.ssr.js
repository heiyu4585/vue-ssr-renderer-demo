// router.js
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// import indexList from '@/components/index_list'
// import pageList from '@/components/page_list'


const indexList = () => import('@/components/index_list')
const pageList = () => import('@/components/page_list')

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({y: 0}),
    routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: indexList
      },
      {
        path: '/pageList',
        name: 'pageList',
        component: pageList,
      },
      {
        path: '/pageList/:id',
        name: 'pageList',
        component: pageList,
      },
    ]
  })
}
