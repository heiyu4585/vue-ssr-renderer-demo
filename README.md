
## TODOList:

2.新增老的版本

3.两个版本的对比


## 注意事项

1.api模拟  [文档地址](https://www.showapi.com/api/apiList)

如果过期(过期时间2019-03-28),替换自己的模拟API即可


## 坑

1. UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 30): Error: connect ECONNREFUSED 127.0.0.1:80

控制台抛 uncaught ，这是多么贴心的功能。以前都是默默吃掉这个异常的，在一个项目里 debug 简直醉人。

https://www.zhihu.com/question/40876687/answer/88627772


2.http-proxy-middleware connect ECONNREFUSED 127.0.0.1:80

解决方法
１. 将node服务器端口改成　127.0.0.1:80 
2. 将接口服务器端口改成　127.0.0.1:80 
3. 将asyncData方法使用的请求url加上域名+端口，如下所示

``` 
export default {
  asyncData ({ params }) {
    return axios.get(`https://127.0.0.1:3000/api/${params.id}`)
    .then((res) => {
      return { title: res.data.title }
    })
  }
}
```
参考: [Nuxt ServerError connect ECONNREFUSED 127.0.0.1:80 错误解决](https://blog.csdn.net/qq_27068845/article/details/79382850)


3.axios 将post请求数据转为formdata

```js
axios({
            url: '/api/index/getIndexlbt',
            method: 'post',
            data: {
              relevanceId:this.$route.params.id,
              pictureType:4
            },
            transformRequest: [function (data) {
              let ret = ''
              for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
              }
              return ret
            }],
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
```


##参考资料 

### 官方资料

[vue-ssr](https://ssr.vuejs.org/zh/)


### 理解ssr

[简单的 Vue SSR Demo](https://juejin.im/entry/5a56c944518825734d1485bc)

[Vue项目SSR改造实战](https://segmentfault.com/a/1190000009373793)

[从零开始搭建vue-ssr系列之二：Client端渲染以及webpack2+vue2踩坑之旅](https://segmentfault.com/a/1190000009372772)

[从零开始搭建vue-ssr系列之三：服务器渲染的奥秘](https://segmentfault.com/a/1190000009373793)

[Vue项目SSR改造实战](https://segmentfault.com/a/1190000012440041)  可参考性比较强

[史上最详细易懂的vue服务端渲染（ssr）教程](https://github.com/zyl1314/vue-ssr)  可以简单理解,对于后期搭建好想没啥大用

### vuex

[详解 Vue & Vuex 实践](https://zhuanlan.zhihu.com/p/25042521)

[vuex2-demo](https://github.com/sailengsi/sls-vuex2-demo) demo不错

### 可参考的demo

[官方demo](https://github.com/vuejs/vue-hackernews-2.0)  官方demo,大而全,存在接口墙的问题

[vue-hackernews-2.0 源码解析](https://www.jianshu.com/p/8c7d979bedcf)  可以结合官方demo查看更佳

[vnews](https://github.com/tiodot/vnews) 解决官方demo无法访问的问题, 功能类似vue-hackernews-2.0, 只不过内容源换成掘金网站，因而无法使用service worker的push功能。

[Beauty](https://github.com/beauty-enjoy/beauty)  听说挺好,但是没有尝试

#### 其他

[mmf-blog vuejs 2.0 服务端渲染 v2版](https://github.com/lincenying/mmf-blog-vue2-ssr)

[vue-cnode-mobile](https://github.com/soulcm/vue-cnode-mobile/)