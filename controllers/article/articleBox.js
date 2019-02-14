import ajax from '../../utils/ajax'
import articleApi from '../../api/aricleBox'

export default async function (body, articleBoxEle, articleId) {
    body.classList.add('body-fixed')

    // 装载数据
    await articleApi(articleId)

    { // 框关闭
        const closeEle = document.querySelector('.articlebox .close')
        closeEle.addEventListener('click', () => {
            body.removeChild(articleBoxEle);
            body.classList.remove('body-fixed')
        });
    }

    { // 点赞
        const parise = document.querySelector('.articlebox .zan')
        parise.addEventListener('click', ()=>{
            ajax('POST', `/api/article/${articleId}/parise`).then(data=>{
                if( data.msg === '点赞成功' ||  data.msg === '取消点赞成功'){
                    const pariseNum = document.querySelector('.articlebox .zan-text')
                    pariseNum.innerText = data.data
                    parise.classList.toggle('isStatus')
                }
            })
        })
    }

    { // 喜欢
        const parise = document.querySelector('.articlebox .favorite')
        parise.addEventListener('click', ()=>{
            ajax('POST', `/api/article/${articleId}/favorite`).then(data=>{
                if( data.msg === '喜欢成功' ||  data.msg === '取消喜欢成功'){
                    const pariseNum = document.querySelector('.articlebox .favorite-text')
                    pariseNum.innerText = data.data
                    parise.classList.toggle('isStatus')
                }
            })
        })
    }
}