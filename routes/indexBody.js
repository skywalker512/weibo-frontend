import article from '../api/indexArticle';

export default function(router){
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

}