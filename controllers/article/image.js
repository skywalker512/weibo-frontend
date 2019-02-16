import smms from '../../utils/smms'
import ajax from '../../utils/ajax'

import imageApi from '../../api/article/image'
import loading from '../../view/article/loading'

export default function (imageEle, pic) {
    { // 框关闭
        const closeEle = imageEle.querySelector('.image-close a')
        closeEle.addEventListener('click', (e) => {
            e.preventDefault()
            if ( pic._id.length !== 0 ) {
                if (window.confirm("是否取消上传图片，图片将被删除")) {
                    pic._id = [] // 将图片设置为0
                    imageEle.remove()
                }
            } else {
                imageEle.remove()
            }
            
        });
    }

    {
        pic._id = []
        const imgUpload = imageEle.querySelector('#upload')
        imgUpload.addEventListener('change', () => {
            if (imgUpload.files[0]) {
                const imagesEle = imageEle.querySelector('#upload')
                const loadingEle = loading()
                imagesEle.insertAdjacentElement('beforebegin', loadingEle)
                smms(imgUpload).then(result => {
                    if (result.code === 'success') {
                        // pic.url.push(result.data.url)
                        ajax('POST', '/api/image', {
                            hash: result.data.hash,
                            path: result.data.path,
                            height: result.data.height,
                            width: result.data.width,
                            size: result.data.size,
                            location: 'smms',
                        }).then(res => {
                            if (res.code === 200) {
                                loadingEle.remove()
                                imageApi(result.data.url)
                                pic._id.push(res.data)
                            }
                        })
                    }
                })
            }
        })
    }

}