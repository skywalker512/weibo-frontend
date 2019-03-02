import article from '../../api/indexArticle'
import throttle from '../../utils/throttle'

const status = { isHave: 1, page: 1 }
export default function () {
    window.addEventListener('scroll', throttle(async function () {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight)) {
            if( status.isHave !== 0 ){
                const loading = document.querySelector('.article_tips')
                loading.classList.remove('hide');
                status.page++
                if (document.location.pathname.indexOf('category') !== -1) {
                    status.isHave = await article(status.page, document.location.pathname.split('/')[2]);
                } else {
                    status.isHave = await article(status.page);
                }
                loading.classList.add('hide');
            } else {
                const noMore = document.querySelector('.article_nomore')
                noMore.classList.remove('hide');
            }
        }
    }, 100, 200), false);
}

export { status }