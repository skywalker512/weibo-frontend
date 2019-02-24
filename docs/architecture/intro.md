### 基本结构
一开始没有什么头绪，进行了多次重建，最终形成了这样的结构
```
├─api               // 动态的页面，通过 ajax 来获取后装载的页面
│  ├─acount
│  ├─article
│  ├─header
│  └─indexBody      // 首屏
|  ...              // 仅用用于调用 ajax，并调用相应文件 
├─controllers       // 不含有任何的 dom 只是对于网页的控制
│  ├─account
│  ├─article
│  └─indexBody      
|  ...              // 首屏就要加载的控制函数的出口文件
├─dist              // build 之后生成的文件
├─docs              // 文档
├─less              // 样式文件
│  ├─account
│  ├─article
│  ├─favicon
│  ├─fonts
│  ├─index
│  └─svg
├─routes            // 定义路由的结构
├─utils             // 定义了一些帮助其他文件的函数 如 ajax
└─view              // 静态的页面文件，每一次的输出都一致
    ├─account
    ├─article
    ├─header
    └─indexBody
```

我将网页的每块的静态，动态，控制部分放在不同的文件夹中，其中有这样的规则

* indexBody -> 首屏相关
* article   -> 文章
* account   -> 用户
* header    -> 头部