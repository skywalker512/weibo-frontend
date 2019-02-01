import articleListApi from './article_list_api';
import { tipsEle } from './index_body'
import throttle from '../../js/throttle'

export default function articleListController(ele) {
    var page = 1;
    // 回调函数 加载完后隐藏 提示
    function hideTips() {
        tipsEle.classList.add('hide');
    }
    articleListApi(page, ele);
    var clickEle = document.createElement('div');
    clickEle.classList.add('buttom');
    window.addEventListener('scroll', throttle(function () {
        // 有问题 应该 需要预留位置
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight)) {
            tipsEle.classList.remove('hide');
            page++;
            articleListApi(page, ele, hideTips);
        }
    }, 500, 1000), false);
    clickEle.addEventListener('click', () => {
        page++;
        articleListApi(page, ele);
    })
    return clickEle;
}
