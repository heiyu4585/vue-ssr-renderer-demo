# vuecli2ssr

> vue-cli改为ssr配置

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

#构建

>功能:根据url传参分页的demo

使用 vue-cli再次初始化一个项目:

1).创建vue-cli项目
`vue init webpack vue-ssr-demo`

```
cd vue-ssr-demo
npm install
npm run dev
```
2).满足基本功能

1.新增/src/view目录,对应的vue组件

2.安装axios, 新增用于测试的 /api/fetchItem
``npm i axios  -D``
3.安装 vuex ,新增 /store/index 并在 App.js中引入 store
`npm i axios vuex -D`
