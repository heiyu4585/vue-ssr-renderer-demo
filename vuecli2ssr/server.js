const express = require('express')
const app = new express()
const fs = require('fs')
const path = require('path')
const {createBundleRenderer} = require('vue-server-renderer');

const resolve = file => path.resolve(__dirname, file)

const proxy = require('http-proxy-middleware');
// 反向代理（这里把需要进行反代的路径配置到这里即可）
// eg:将/api/test 代理到 ${HOST}/api/test
app.use(proxy('/api', {
  target: "https://m.medplus.net",
  changeOrigin: true,
  pathRewrite: {
      '^/api': '/'
  },
}));
// 生成服务端渲染函数
const renderer = createBundleRenderer(require('./dist/vue-ssr-server-bundle.json'), {
  // 推荐
  // 默认情况下，对于每次渲染，bundle renderer 将创建一个新的 V8 上下文并重新执行整个 bundle。
  // 使用 runInNewContext: false，bundle 代码将与服务器进程在同一个 global 上下文中运行，
  // 所以请留意在应用程序代码中尽量避免修改 global。
  // 使用 runInNewContext: 'once' (2.3.1+)，bundle 将在独立的全局上下文 (separate global context) 取值，
  // 然而只在启动时取值一次。这提供了一定程度的应用程序代码隔离，因为它能够防止 bundle 中的代码意外污染服务器
  // 进程的 global 对象。注意事项如下：
  runInNewContext: 'once',
  // 模板html文件
  template: fs.readFileSync(resolve('./src/index.template.html'), 'utf-8'),
  // client manifest
  // 通过此选项提供一个由 vue-server-renderer/client-plugin 生成的客户端构建 manifest
  // 对象 (client build manifest object)。
  // 此对象包含了 webpack 整个构建过程的信息，从而可以让 bundle renderer
  // 自动推导需要在 HTML 模板中注入的内容
  clientManifest: require('./dist/vue-ssr-client-manifest.json')
});

// 在服务器处理函数中……
app.get('*', (req, res) => {
  console.log("被访问了~~")
  const context = {
    url: req.url,
    title: '服务端渲染测试', // {{title}}
  }
  // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
  // 现在我们的服务器与应用程序已经解耦！
  renderer.renderToString(context, (err, html) => {
    res.end(html)
  })
})

const port = process.env.PORT || 8003;
app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})

