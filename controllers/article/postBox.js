import {config} from '../../config'
import ajax from '../../utils/ajax'

import article from '../../api/indexBody/article'

export default function(body, postBoxEle) {
    { // 框关闭
        const closeEle = document.querySelector('.post .close')
        closeEle.addEventListener('click', () => {
            body.removeChild(postBoxEle);
        });
    }
    const textarea =  document.querySelector('.post textarea')
    { // 发布 以及 一些检查
        const pushBotton = document.querySelector('.post .push button')
        pushBotton.addEventListener('click', () =>{
            
            const isText = config.articlePattern.test(textarea.value)
            let isTips = document.querySelector('.post .tips .icon')
            if( !isTips && !isText ) {
                const post = document.querySelector('.post .input')
                post.insertAdjacentHTML('afterbegin', `<div class="tips">请不要输入特殊字符，且大于10个字符小于140个字符<span class="icon icon-index-close"></span></div>`)
                isTips = document.querySelector('.post .tips .icon')
                isTips.addEventListener('click', ()=>{
                    isTips.parentNode.remove()
                })
            }
            if(isText){
                ajax('POST', '/api/article', { content: textarea.value , categoryId: '5c600f1c3fae496320e819e0'  }).then(result=>{
                    if( result.code === 200 ){
                        body.removeChild(postBoxEle)
                        let data = []
                        data[0] = result.data
                        article(data)
                    }
                })
            }
        })
    }
    const textNum = document.querySelector('#count')
    const textTips = document.querySelector('.post .count')
    {
        textarea.addEventListener('keyup', ()=>{
            if(textarea.value.length>0){
                textTips.classList.remove('hide')
            }
            console.log(textarea.value.length)
            textNum.innerText = textarea.value.length
        })
    }
}