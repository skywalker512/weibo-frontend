## 权限
因为 http 请求是没有状态的，所以就无法通过 http 来进行权限的控制，目前主流的用户登录有 jwt 和 session，因为目前做的是 pc 端的网页，所以后者就够用了。

有了用户登录，但是 session 的存储大小有限，而且如果不指定 URL 每次的请求都会将 session 传会服务器，造成不必要的浪费，最后我参考了 Flarun 的 api 结构，将相应的状态放在 api 中

#### Flarum
文章
```js
canDelete: true
canHide: true
canLock: true
canRename: true
canReply: true
canSelectBestAnswer: true
canSplit: true
canSticky: true
canTag: true
isApproved: true
isLocked: false
isSticky: false
subscription: false
```

#### 本项目
用户
```js
"isMe": 1
```
文章
```js
"status": {
    "isPraise": 0,
    "isFavorite": 0,
    "isLogined": 1
}
```