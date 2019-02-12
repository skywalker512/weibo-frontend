## 红岩前端寒假作业

使用原生 js，开发一个类似于微博的网站的前端部分

### 整体思路

* 使用 webpack 来整合 js,less

* 单页应用 PWA

  使用 workbox-webpack-plugin 来实现（不知是不是叫引用了库）

* 模块化设计
  由于不能使用框架，并且使用原生操作 dom 实在太繁杂，所以使用 es2015 的模板字符串来放置 html 模板，并将网页分为几块分别放入不同的 js 中，再通过简单的模板解析来生成 html 文件。

* ... ...


### 后端

用于测试的，由 koa2 写的后端
https://github.com/skywalker512/weibo-backend