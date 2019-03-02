// 引入 less
import './less/common.less';
import header from './view/header';
import indexBody from './view/indexBody';
import indexApi from './api/indexFirstLoad'
import route from './routes/index';
import controllers from './controllers'
import tips from './view/indexBody/tips'


// 连接所有的 层级
function render() {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(header());
    fragment.appendChild(indexBody());
    fragment.appendChild(tips());
    document.body.appendChild(fragment)
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
