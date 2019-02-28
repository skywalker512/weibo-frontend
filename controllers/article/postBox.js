import { config } from '../../config'
import ajax from '../../utils/ajax'
import postBox from '../../api/postBox'

import {router} from '../../routes/index'

import categoryBox from './categoryBox'

import tipsApi from '../../api/indexBody/tips'
import tipsController from '../indexBody/tips'

export default async function (body, postBoxEle) {
    { // 框关闭
        const closeEle = postBoxEle.querySelector('.close')
        closeEle.addEventListener('click', () => {
            history.back()
            postBoxEle.remove();
        });
    }

    const pic = { _id: [] }
    const category = { _id: [] }
    const videoArry = { _id: [] }

    const textarea = postBoxEle.querySelector('textarea')
    { // 发布 以及 一些检查
        const pushBotton = postBoxEle.querySelector('.push button')
        pushBotton.addEventListener('click', () => {

            const isText = config.articlePattern.test(textarea.value)
            const isCategory = !(category._id.length === 0)
            let isTextTips = postBoxEle.querySelector('.tips.text .icon')
            let isCategoryTips = postBoxEle.querySelector('.tips.categorytips .icon')
            if (!isTextTips && !isText) {
                const post = postBoxEle.querySelector('.input')
                post.insertAdjacentHTML('afterbegin', `<div class="tips text">请不要输入特殊字符，且大于10个字符小于140个字符<span class="icon icon-index-close"></span></div>`)
                isTextTips = postBoxEle.querySelector('.tips.text .icon')
                isTextTips.addEventListener('click', () => {
                    isTextTips.parentNode.remove()
                })
            }

            if (!isCategoryTips && !isCategory) {
                const text = postBoxEle.querySelector('.categorytext')
                text.insertAdjacentHTML('afterbegin', `<div class="tips categorytips">请选择一个节点<span class="icon icon-index-close"></span></div>`)
                isCategoryTips = postBoxEle.querySelector('.tips.categorytips .icon')
                isCategoryTips.addEventListener('click', () => {
                    isCategoryTips.parentNode.remove()
                })
            }

            if (isText && isCategory) {
                ajax('POST', '/api/article', { content: textarea.value, categoryId: category._id, images: pic._id, videos: videoArry._id }).then(result => {
                    if (result.code === 200) {
                        postBoxEle.remove()
                        router.goPath('/')
                    }
                })
            }
        })
    }
    const textNum = postBoxEle.querySelector('#count')
    {
        textarea.addEventListener('keyup', () => {
            textNum.innerText = textarea.value.length
        })
    }

    {// 上传图片的 bottom 的点击发生的事情，引入对应的 js 和 css 文件
        const imgBottom = postBoxEle.querySelector('.icon-article-pic')
        imgBottom.addEventListener('click', () => {
            if (videoArry._id.length === 0) {
                if (!postBoxEle.querySelector('.image-close')) {
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
                }
            } else {
                tipsApi('你不能上传视频的同时上传图片', 'error')
                tipsController()
            }
        })
    }
    

    {// 上传视频
        const vidBottom = postBoxEle.querySelector('.icon-article-video')
        vidBottom.addEventListener('click', () => {
            if (pic._id.length === 0) {
                if (!postBoxEle.querySelector('.video-close')) {
                    import(/* webpackChunkName: "video" */ '../../less/article/video.less');
                    import(/* webpackChunkName: "video" */ '../../view/article/video').then(module => {
                        const video = module.default;
                        const videoEle = video()
                        vidBottom.parentNode.appendChild(videoEle);
                        import(/* webpackChunkName: "video" */ './video').then(module => {
                            const videoController = module.default;
                            videoController(videoEle, videoArry)
                        });
                    });
                }
            } else {
                tipsApi('你不能上传图片的同时上传视频', 'error')
                tipsController()
            }
        })
    }

    {
        const emojiBottom = postBoxEle.querySelector('.icon-article-emoji')
        emojiBottom.addEventListener('click', ()=>{
            if (!postBoxEle.querySelector('.emoji-close')) {
                import(/* webpackChunkName: "emoji" */ '../../less/article/emoji.less');
                import(/* webpackChunkName: "emoji" */ '../../view/article/emoji').then(module => {
                    const emoji = module.default;
                    const emojiEle = emoji()
                    emojiBottom.parentNode.appendChild(emojiEle);
                    import(/* webpackChunkName: "emoji" */ './emoji').then(module => {
                        const emojiController = module.default;
                        emojiController(emojiEle, textarea, textNum)
                    });
                });
            }
        })
    }

    { // 选择节点
        const categoryBottom = postBoxEle.querySelector('.icon-aticle-topic')
        categoryBottom.addEventListener('click', async ()=>{
            if (!postBoxEle.querySelector('.category-close')) {
                await postBox()
                categoryBox(postBoxEle ,category)
            }
        })
    }
}