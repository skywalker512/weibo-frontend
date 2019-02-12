import router from '../utils/router';
import article from '../api/indexArticle';
import {setCookie} from '../utils/cookie'

import account from './account'

export default function() {
    router();
    router.get('/', function () {
        const ele = document.querySelector('.article_list');
        ele.innerHTML = '';
        article(1);
        setCookie('isHave', 1)
        setCookie('page', 1)
    });
    
    router.get('/category/:int', function (req) {
        const ele = document.querySelector('.article_list');
        ele.innerHTML = '';
        article(1, req.params.int);
        setCookie('isHave', 1)
        setCookie('page', 1)
    });

    account(router)
    
    router.proxyLinks(document.querySelectorAll('a'));

    const config = { attributes: true, childList: true, subtree: true };

    const callback = function() {
        router.proxyLinks(document.querySelectorAll('a'));
    };

    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(document.querySelector('body'), config);
    
}
