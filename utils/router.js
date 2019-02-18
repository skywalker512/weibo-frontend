export default class Router {
    constructor(self) {
        this.go = this.go.bind(this) // 绑定在 eventlinstener 里的 go 的 this
        this.emit = this.emit.bind(this)

        this.routes = []
        this.req = {} // 该对象在每次请求时都会变化 类似于 ctx
        this.self = self
        this.regexp = []
        window.addEventListener('popstate', this.emit, false)
    }

    extractRoute(route) {
        let matchs = []
        route = route.replace(/[\-{}\[\]+?.,\\\^$|#\s]/g, '\\$&') // 匹配正则中的保留字 将其转换为 \啥子 形成转义
            .replace(/:\w+/g, function (match) {
                if (match) matchs.push(match.replace(':', ''))
                return '([^/?]+)'
            })
        return {
            regexp: new RegExp(`^${route}$`),
            matchs
        }
    }

    extractParams(routeReg, path) {
        var params = routeReg.exec(path).slice(1) // 正则 踢掉第一个 exec 返回的完整连接
        var results = []
        for (let i = 0, len = params.length; i < len; i++) {
            results.push(decodeURIComponent(params[i]) || null) // 转换 为 uri
        }
        return results
    }

    async exec() {
        for (let i = 0, len = this.routes.length; i < len; i++) { // 进行匹配
            const route = this.regexp[i]
            if (!route.regexp.test(this.req.path)) {
                continue
            }
            const result = this.extractParams(route.regexp, this.req.path)
            this.req.params = {} // 这一次的 params
            for (let j = 0, len = route.matchs.length; j < len; j++) {
                this.req.params[route.matchs[j]] = result[j]
            }
            history.pushState(null, null, this.req.url)
            await this.routes[i].fn.call(this.self, this.req)
        }
    }

    emit() { // 这里传入了所有的连接 对所有的连接都做了处理
        if (this.req.url === location.href) return // 如果当前次的点击与上次相同 结束整个过程
        this.req.url = location.href // 将当此的 url 赋值
        this.req.path = location.pathname
        this.exec() // 对当前的 连接进行配备以及执行相应的函数
    }

    go(url) { // 浏览器变化控制
        // history.pushState({ path }, null, path) // 将浏览器变化移到后面处理
        if (this.req.url === url) return // 如果当前次的点击与上次相同 结束整个过程
        this.req.url = url
        this.req.path = '/' + url.split('//')[1].split('/').slice(1).join('/')
        this.exec() // 对当前的 连接进行配备以及执行相应的函数
    }

    proxyLinks(nodes) { // 获取 a 标签的 node
        for (let i = 0, len = nodes.length; i < len; i++) {
            const go = this.go
            nodes[i].addEventListener('click', function (e) {
                e.preventDefault() // 阻止 a 标签的默认行为
                go(this.href) // 点击事件发生时传递给 go 函数 推入浏览器 history api
            })
        }

        const config = { attributes: false, childList: true, subtree: true };
        const callback = records =>{
            this.proxyLinks(records[records.length - 1].target.querySelectorAll('a')) // 记录最后一个，以防触到浏览器限制
        };
        const observer = new MutationObserver(callback)
        observer.observe(document.querySelector('body'), config);
    }

    get(path, fn) { // url 的模式匹配以及相应方法的设置入口
        this.routes.push({ path, fn }) // 推入记录的变量中
    }

    buildRule() {
        for (let i = 0, len = this.routes.length; i < len; i++) { // 进行匹配
            this.regexp.push(this.extractRoute(this.routes[i].path))
        }
    }
}