import Router from '../utils/router';
import article from '../api/indexArticle';

import account from './account'
import post from './post' 
import articleBox from './articleBox'
export default function() {
    const router = new Router(null)
    router.get('/', function () {
        const ele = document.querySelector('.article_list');
        ele.innerHTML = '';
        article(1);
    });
    
    router.get('/category/:_id', function (req) {
        const ele = document.querySelector('.article_list');
        ele.innerHTML = '';
        article(1, req.params._id);
    });

    account(router)
    post(router)
    articleBox(router)
    
    router.proxyLinks(document.querySelectorAll('a'))

    router.buildRule()

    const config = { attributes: false, childList: true, subtree: true };

    const callback = function(records) {
        router.proxyLinks(records[records.length-1].target.querySelectorAll('a'));
    };

    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(document.querySelector('body'), config);
    
}
