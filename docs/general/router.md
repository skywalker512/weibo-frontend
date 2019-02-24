### 路由

路由的作用是能在页面不刷新的情况下改变 URL，有 hash 和 history api 两种方案。因为我要考虑 SEO，所以使用了后者

代码位于 `./utils/router.js` 我做了必要的注释，代码参考于 https://github.com/cheft/minrouter/tree/master 我将其进行一些修改：1. 使用 class 2. 删除不必要的代码

