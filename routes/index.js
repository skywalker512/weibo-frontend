import router from '../utils/router';
import article from '../api/indexArticle';
import {setCookie} from '../utils/cookie'

import account from './account'
import post from './post' 
import articleBox from './articleBox'
export default function() {
    router();
    router.get('/', function () {
        const ele = document.querySelector('.article_list');
        ele.innerHTML = '';
        article(1);
        setCookie('isHave', 1)
        setCookie('page', 1)
    });
    
    router.get('/category/:_id', function (req) {
        const ele = document.querySelector('.article_list');
        ele.innerHTML = '';
        article(1, req.params._id);
        setCookie('isHave', 1)
        setCookie('page', 1)
    });

    account(router)
    post(router)
    articleBox(router)
    
    router.proxyLinks(document.querySelectorAll('a'));

    const config = { attributes: false, childList: true, subtree: true };

    const callback = function() {
        router.proxyLinks(document.querySelectorAll('a'));
    };

    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(document.querySelector('body'), config);
    
}
