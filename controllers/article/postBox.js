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

    {
        const pushBotton = document.querySelector('.post .push button')
        pushBotton.addEventListener('click', () =>{
            const textarea =  document.querySelector('.post textarea')
            if( !config.articlePattern.test(textarea.value) ) {
                console.log(1)
            } else {
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
}