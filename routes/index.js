import Router from '../utils/router';

import account from './account'
import post from './post' 
import articleBox from './articleBox'
import indexBody from './indexBody'

export default function() {
    const router = new Router(null)

    indexBody(router)
    account(router)
    post(router)
    articleBox(router)
    
    router.proxyLinks(document.querySelectorAll('a'))

    router.buildRule()
}
