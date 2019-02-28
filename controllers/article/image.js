import upyun from '../../utils/upyun'
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
        const imgUpload = imageEle.querySelector('#img-upload')
        const addBotton = imageEle.querySelector('.add-image')
        imgUpload.addEventListener('change', () => {
            if (imgUpload.files[0]) {
                const imagesEle = imageEle.querySelector('#img-upload')
                const loadingEle = loading('pre-image')
                imagesEle.insertAdjacentElement('beforebegin', loadingEle)
                if (pic._id.length === 8) addBotton.classList.add('hide')
                upyun(imgUpload, encodeURIComponent(`/images/{year}/{mon}/{day}/{hour}_{min}_{sec}_{filename}{.suffix}`)).then(result=>{
                    if(result.code === 200) {
                        ajax('POST', '/api/image', {
                            path: result['url'],
                            height: result['image-height'] || 0,
                            width: result['image-width'] || 0,
                            size: result['file_size'] || 0,
                            location: 'upyun',
                        }).then(res => {
                            if (res.code === 200) {
                                loadingEle.remove()
                                imageApi(result.fullurl)
                                pic._id.push(res.data)
                            }
                        })
                    }
                })
            }
        })
    }

}