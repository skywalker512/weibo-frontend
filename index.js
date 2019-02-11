// 引入 less
import './less/common.less';
import header from './view/header';
import indexBody from './view/indexBody';
import indexApi from './api/index'
import route from './routes/index';
import controllers from './controllers'

// 连接所有的 层级
function render() {
    document.body.appendChild(header());
    document.body.appendChild(indexBody());
}

async function api() {
    await indexApi();
}

async function main() {
    render()
    await api()
    controllers()
    route()
}

main()
