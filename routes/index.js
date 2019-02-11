import router from '../utils/router';
import article from '../api/indexBody';

function setCookie(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

window.addEventListener('load', ()=>{
    setCookie('isHave', 1)
    setCookie('page', 1)
})

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
