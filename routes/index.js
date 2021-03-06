import Router from '../utils/router';

import account from './account'
import post from './post'
import articleBox from './articleBox'
import indexBody from './indexBody'

const router = new Router(null)
export default function () {
    indexBody(router)
    account(router)
    post(router)
    articleBox(router)

    router.proxyLinks(document.querySelectorAll('a'))

    router.buildRule()

    if(location.pathname!=='/') router.goPath(location.pathname)

    const config = { attributes: false, childList: true, subtree: true };
    const callback = records => {
        router.proxyLinks(records[0].target.querySelectorAll('a')) // 记录第一个，以防触到浏览器限制
        document.querySelectorAll('video').forEach(value=>{
            value.pause()
        })
    }
    const observer = new MutationObserver(callback)
    observer.observe(document.querySelector('body'), config);
}

export {router}
