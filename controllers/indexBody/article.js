import article from '../../api/indexArticle'
import throttle from '../../utils/throttle'

let isHave = 1
let page = 1
export default function () {

    window.addEventListener('load', ()=>{
        isHave = 1
        page = 1
    })

    window.addEventListener('scroll', throttle(async function () {
        console.log(isHave, page)
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight)) {
            if( isHave !== 0 ){
                const loading = document.querySelector('.article_tips')
                loading.classList.remove('hide');
                page++;
                if (document.location.pathname.indexOf('category') !== -1) {
                    isHave = await article(page, document.location.pathname.split('/')[2]);
                } else {
                    isHave = await article(page);
                }
                loading.classList.add('hide');
            } else {
                const noMore = document.querySelector('.article_nomore')
                noMore.classList.remove('hide');
            }
        }
    }, 500, 1000), false);


}

export { isHave, page }