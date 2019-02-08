import router from '../../js/router';
import article from '../api/article';

router();
router.get('/', function (req, res) {
    const ele = document.querySelector('.article_list');
    ele.innerHTML = '';
    article(1, ele, null, null);
});

router.get('/tag/:int', function (req, res) {
    const ele = document.querySelector('.article_list');
    ele.innerHTML = '';
    article(1, ele, null, req.params.int);
});

router.addResMethod('view', function (content) {
    console.log(content)
});

window.addEventListener('load', () => {
    router.proxyLinks(document.querySelectorAll('a'));
})