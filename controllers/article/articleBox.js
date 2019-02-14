import articleApi from '../../api/aricleBox'

export default function (body, articleBoxEle, articleId) {
    body.classList.add('body-fixed')

    // 装载数据
    articleApi(articleId)

    { // 框关闭
        const closeEle = document.querySelector('.articlebox .close')
        closeEle.addEventListener('click', () => {
            body.removeChild(articleBoxEle);
            body.classList.remove('body-fixed')
        });
    }

    { // 框控制 
    }
}