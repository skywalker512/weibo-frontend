import { config } from '../../config'
import ajax from '../../utils/ajax'

import article from '../../api/indexBody/article'

export default function (body, postBoxEle) {
    { // 框关闭
        const closeEle = postBoxEle.querySelector('.close')
        closeEle.addEventListener('click', () => {
            postBoxEle.remove();
        });
    }
    let pic = {}
    const textarea = postBoxEle.querySelector('textarea')
    { // 发布 以及 一些检查
        const pushBotton = postBoxEle.querySelector('.push button')
        pushBotton.addEventListener('click', () => {

            const isText = config.articlePattern.test(textarea.value)
            let isTips = postBoxEle.querySelector('.tips .icon')
            if (!isTips && !isText) {
                const post = postBoxEle.querySelector('.input')
                post.insertAdjacentHTML('afterbegin', `<div class="tips">请不要输入特殊字符，且大于10个字符小于140个字符<span class="icon icon-index-close"></span></div>`)
                isTips = postBoxEle.querySelector('.tips .icon')
                isTips.addEventListener('click', () => {
                    isTips.parentNode.remove()
                })
            }
            if (isText) {
                ajax('POST', '/api/article', { content: textarea.value, categoryId: '5c600f1c3fae496320e819e0', images: pic._id }).then(result => {
                    if (result.code === 200) {
                        console.log(pic);
                        postBoxEle.remove()
                        let data = []
                        data[0] = result.data
                        article(data)
                    }
                })
            }
        })
    }
    const textNum = postBoxEle.querySelector('#count')
    const textTips = postBoxEle.querySelector('.count')
    {
        textarea.addEventListener('keyup', () => {
            if (textarea.value.length > 0) {
                textTips.classList.remove('hide')
            }
            textNum.innerText = textarea.value.length
        })
    }

    {// 上传图片的 bottom 的点击发生的事情，引入对应的 js 和 css 文件
        const imgBottom = postBoxEle.querySelector('.icon-article-pic')
        imgBottom.addEventListener('click', (e) => {
            import(/* webpackChunkName: "image" */ '../../less/article/image.less');
            import(/* webpackChunkName: "image" */ '../../view/article/image').then(module => {
                const image = module.default;
                const imageEle = image()
                imgBottom.parentNode.appendChild(imageEle);
                import(/* webpackChunkName: "image" */ './image').then(module => {
                    const imageController = module.default;
                    imageController(imageEle, pic)
                });
            });
        })
    }
}