import articleApi from '../../api/aricleBox'

export default function (body, articleBoxEle, articleId) {
    // 装载数据
    articleApi(articleId)

    { // 框关闭
        const closeEle = document.querySelector('.articlebox .close')
        closeEle.addEventListener('click', () => {
            body.removeChild(articleBoxEle);
        });
    }

    { // 框控制 
    }
}