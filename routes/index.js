import router from '../utils/router';
import article from '../api/indexBody';
import {setCookie} from '../utils/cookie'

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
    
    // router.addResMethod('view', function (content) {
    //     console.log(content)
    // });
    
    router.proxyLinks(document.querySelectorAll('a'));
    
}
