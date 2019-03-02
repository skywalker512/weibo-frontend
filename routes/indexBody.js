import article from '../api/indexArticle';
import { status } from '../controllers/indexBody/article'
function tips () {
    console.log(244)
    document.querySelector('.article_nomore').classList.add('hide')
    status.isHave =1
    status.page=1
}
export default function(router){
    router.get('/', function () {
        const ele = document.querySelector('.article_list');
        ele.innerHTML = '';
        article(1);
        tips()
    });
    
    router.get('/category/:_id', function (req) {
        const ele = document.querySelector('.article_list');
        ele.innerHTML = '';
        article(1, req.params._id);
        tips()
    });

    router.get('/done', function () {});

}