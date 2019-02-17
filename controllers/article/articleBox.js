import ajax from '../../utils/ajax'
import articleApi from '../../api/aricleBox'

import commentApi from '../../api/article/commentBox'

export default async function (body, articleBoxEle, articleId) {
    body.classList.add('body-fixed')

    // 装载数据
    await articleApi(articleId)

    { // 框关闭
        const closeEle = articleBoxEle.querySelector('.close')
        closeEle.addEventListener('click', () => {
            articleBoxEle.remove()
            body.classList.remove('body-fixed')
        });
    }

    { // 点赞
        const parise = articleBoxEle.querySelector('.zan')
        parise.addEventListener('click', ()=>{
            ajax('POST', `/api/article/${articleId}/praise`).then(data=>{
                if( data.code === 200 ){
                    const pariseNum = articleBoxEle.querySelector('.zan-text')
                    pariseNum.innerText = data.data
                    parise.classList.toggle('isStatus')
                }
            })
        })
    }

    { // 喜欢
        const parise = articleBoxEle.querySelector('.favorite')
        parise.addEventListener('click', ()=>{
            ajax('POST', `/api/article/${articleId}/favorite`).then(data=>{
                if( data.code === 200 ){
                    const pariseNum = articleBoxEle.querySelector('.favorite-text')
                    pariseNum.innerText = data.data
                    parise.classList.toggle('isStatus')
                }
            })
        })
    }

    { // 评论
        const commetBottom = articleBoxEle.querySelector('.comment .submit')
        const commet = articleBoxEle.querySelector('.comment textarea')
        commetBottom.addEventListener('click', ()=>{
            ajax('POST', `/api/comment`, { content: commet.value, articleId }).then(result=>{
                if( result.code === 200  ){
                    commet.value = ''
                    let data = []
                    data[0] = result.data
                    result.data.isPraise = 0
                    commentApi(data)
                    const commentPraise = articleBoxEle.querySelector('.comment .comment-list .right')
                    commentPraise.addEventListener('click', function(){
                        const _id = this.getAttribute('data-index')
                        ajax('POST', `/api/comment/${_id}/praise`).then(data=>{
                            if(data.code === 200) {
                                const pariseNum = this.querySelector('.text.zan')
                                pariseNum.innerText = data.data
                                this.classList.toggle('isStatus')
                            }
                        })
                    })
                }
            })
        })
    }

    { // 评论点赞
        const commentPraise = articleBoxEle.querySelectorAll('.comment .comment-list .right')
        commentPraise.forEach((value)=>{
            value.addEventListener('click', function(){
                const _id = this.getAttribute('data-index')
                ajax('POST', `/api/comment/${_id}/praise`).then(data=>{
                    if(data.code === 200) {
                        const pariseNum = this.querySelector('.text.zan')
                        pariseNum.innerText = data.data
                        this.classList.toggle('isStatus')
                    }
                })
            })
        })
    }

    { // emoji 表情
        const emojiBottom = articleBoxEle.querySelector('.icon-article-emoji')
        const textarea = articleBoxEle.querySelector('textarea')
        emojiBottom.addEventListener('click', ()=>{
            import(/* webpackChunkName: "emoji" */ '../../less/article/emoji.less');
            import(/* webpackChunkName: "emoji" */ '../../view/article/emoji').then(module => {
                const emoji = module.default;
                const emojiEle = emoji()
                emojiBottom.parentNode.appendChild(emojiEle);
                import(/* webpackChunkName: "emoji" */ './emoji').then(module => {
                    const emojiController = module.default;
                    emojiController(emojiEle, textarea, null)
                });
            });
        })
    }

    { // 幻灯片切换
        // 鼠标滑动切换
        const bigImage = articleBoxEle.querySelector('.big-image')
        if (bigImage) {
            bigImage.addEventListener ('mousemove', function(event) {
                if( event.offsetX < 300 && event.offsetX>0 ) {
                    bigImage.classList.add('isPre')
                } else {
                    bigImage.classList.remove('isPre')
                }
            }, false);
            bigImage.addEventListener('click', function(event){
                if( event.offsetX < 300 && event.offsetX>0 ) {
                    const current = articleBoxEle.querySelector('.small-image .current')
                    const prev = current.previousElementSibling
                    if (prev) {
                        current.classList.toggle('current')
                        prev.classList.toggle('current')
                        bigImage.firstChild.setAttribute('src', prev.firstChild.getAttribute('src'))
                    }
                } else {
                    const current = articleBoxEle.querySelector('.small-image .current')
                    const next = current.nextElementSibling
                    if (next) {
                        current.classList.toggle('current')
                        next.classList.toggle('current')
                        bigImage.firstChild.setAttribute('src', next.firstChild.getAttribute('src'))
                    }
                }
            })
        }

        // 鼠标点击切换
        const smallImages = articleBoxEle.querySelectorAll('.small-image div')
        if (smallImages) {
            smallImages.forEach(value=>{
                value.addEventListener('click', function(){
                    const smallImagesCurrent = articleBoxEle.querySelector('.small-image .current')
                    smallImagesCurrent.classList.toggle('current')
                    this.classList.toggle('current')
                    bigImage.firstChild.setAttribute('src', this.firstChild.getAttribute('src'))
                })
            })
        }
    }
}