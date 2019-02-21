## 红岩前端寒假作业

[![Netlify Status](https://api.netlify.com/api/v1/badges/9ad1b197-7dde-41fd-96c2-78c3a8470092/deploy-status)](https://app.netlify.com/sites/thirsty-lovelace-fe3bf8/deploys)

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


### TODO

- 登录 / 注册页

  - [x] 注册
  - [x] 登录（保持登录状态）
  - [x] 退出登录

  tip：登陆方式可以不限于用户名+密码，比如手机号+手机验证码

- 主页

  - [ ] 搜索
  - [x] 信息分类
  - [x] 关注
  - [x] 收藏
  - [ ] 下滑 / 点击刷新按钮  =>  更新列表信息
  - [x] 发送微博

- 详情信息页

  - [x] 图片、文字数据的展示
  - [x] 点赞 / 取消点赞
  - [x] 发表评论 / 回复评论
    - [x] 发送emoji表情
    - [x] 发送图片

- 个人信息页

  - [ ] ~~关注、粉丝数~~
  - [x] 发微博 / 显示已发微博
  - [x] 能够上传头像
  - [ ] ~~修改昵称~~
  - [x] 修改个人简介

加分项：

- [x] 发送带图片的微博
- [ ] 发送带视频的微博
- [ ] 微博热门
- [ ] 微博热搜
- [ ] ~~后台管理~~
- [ ] 使用https
- [ ] 考虑安全性(比如xss、sql注入、csrf)
- [ ] 考虑缓存与性能
- [ ] 反爬虫
- [ ] 部署在自己的云服务器上（HTTP/HTTPS/CDN）

加下滑线的是暂时没有计划的
