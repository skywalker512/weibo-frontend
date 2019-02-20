import {personApi, personFavoriteApi} from '../../api/personBox'
import { config } from '../../config'
import ajax from '../../utils/ajax'
import upyun from '../../utils/upyun'

export default async function (body, personBoxEle, id) {
    body.classList.add('body-fixed')

    // 装载数据
    await personApi(id)

    { // 框关闭
        const closeEle = personBoxEle.querySelector('.close')
        closeEle.addEventListener('click', () => {
            personBoxEle.remove()
            body.classList.remove('body-fixed')
        });
    }

    { // 编辑 bio
        const editBio = personBoxEle.querySelector('.profile') // div
        let prev = editBio.innerHTML // span 文本
        let nowBio = personBoxEle.querySelector('#eidt-profile') // span 元素
        body.addEventListener('click', (e)=>{
            if(e.target.contains(editBio)){ // 1. 点击事件的对象不是目标区域本身 2. 事件对象同时也不是目标区域的子元素
                const textarea = personBoxEle.querySelector('textarea') // 编辑框
                if (textarea) {
                    if (config.profilePattern.test(textarea.value) && textarea.value !== nowBio.innerHTML) {
                        editBio.innerHTML = prev // 将 编辑框换成文本
                        nowBio = personBoxEle.querySelector('#eidt-profile') // 这里的 span 已经不是之前的 span 了
                        nowBio.innerHTML = '正在与后端交互中...'
                        // PATCH方法用于对资源应用部分修改
                        ajax('PATCH', `/api/user/${id}`, { profile: textarea.value }).then(res=>{
                            if(res.code === 200) {
                                nowBio.innerHTML = textarea.value // 将编辑器中的东西赋值给文本
                                prev = editBio.innerHTML // 将 span 文本更新
                            } else {
                                editBio.innerHTML = prev // 如果出错就使用原来文本
                            }
                        })
                    } else {
                        editBio.innerHTML = prev // 如果不匹配使用原来文本
                    }
                }
            }
        })
        editBio.addEventListener('click', function(event){
            if(event.target.nodeName === 'SPAN') {
                editBio.innerHTML = '<textarea></textarea>'
                const textarea = personBoxEle.querySelector('textarea')
                if(nowBio.innerHTML !== '一句话介绍一下自己吧，让别人更了解你'){
                    // 先使用 value 赋值再 focus 可以将光标移到末尾
                    textarea.value = nowBio.innerHTML
                }
                textarea.focus()
            }
        })
    }

    { // 编辑头像
        const uploadBottom = personBoxEle.querySelector('#avatar-upload')
        uploadBottom.addEventListener('change', ()=>{
            if(uploadBottom.files[0]) {
                upyun(uploadBottom, `/avatar/${id}{.suffix}`).then(result=>{
                    if(result.code === 200) {
                        const avatar = personBoxEle.querySelector('.avatar img')
                        avatar.setAttribute('src', result.fullurl)
                        ajax('PATCH', `/api/user/${id}`, { avatar: result.fullurl })
                    }
                })
            }
        })
    }

    { // 功能区
        const favorite = personBoxEle.querySelector('.person-favorite')
        const article = personBoxEle.querySelector('.person-article')
        const favoriteBottom = personBoxEle.querySelector('.func-content.favorite')
        const articleBottom = personBoxEle.querySelector('.func-content.article')
        favoriteBottom.addEventListener('click', ()=> {
            favoriteBottom.classList.add('active')
            articleBottom.classList.remove('active')

            article.classList.add('hide')
            favorite.classList.remove('hide')
            personFavoriteApi(id) // 在这里不用异步因为后面没有了
        })
        articleBottom.addEventListener('click', ()=> {
            articleBottom.classList.add('active')
            favoriteBottom.classList.remove('active')
            
            favorite.classList.add('hide')
            article.classList.remove('hide')
        })
    }
}