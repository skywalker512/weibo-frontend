import article from '../../api/indexBody'
import throttle from '../../utils/throttle'


function setCookie(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}


function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return 1;
}

export default function () {
    window.addEventListener('scroll', throttle(function () {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight)) {
            let isHave = getCookie('isHave')
            let page = getCookie('page') || 1
            if( isHave !== 'undefined' ){
                const loading = document.querySelector('.article_tips')
                loading.classList.remove('hide');
                page++;
                if (document.location.pathname.indexOf('tag') !== -1) {
                    isHave = article(page, document.location.pathname.split('/')[2]);
                } else {
                    isHave = article(page);
                }
                loading.classList.add('hide');
                setCookie('isHave', isHave)
                setCookie('page', page)
            } else {
                const noMore = document.querySelector('.article_nomore')
                noMore.classList.remove('hide');
            }
        }
    }, 500, 1000), false);
}