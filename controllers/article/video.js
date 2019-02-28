import upyun from '../../utils/upyun'
import ajax from '../../utils/ajax'

import videoApi from '../../api/article/video'
import loading from '../../view/article/loading'

export default function (videoEle, video) {
    { // 框关闭
        const closeEle = videoEle.querySelector('.video-close a')
        closeEle.addEventListener('click', (e) => {
            e.preventDefault()
            if ( video._id.length !== 0 ) {
                if (window.confirm("是否取消上传视频，视频将被删除")) {
                    video._id = [] // 将图片设置为0
                    videoEle.remove()
                }
            } else {
                videoEle.remove()
            } 
        });
    }

    { // 上传视频
        video._id = []
        const vidUpload = videoEle.querySelector('#vid-upload')
        const addBotton = videoEle.querySelector('.add-video')
        vidUpload.addEventListener('change', () => {
            if (vidUpload.files[0]) {
                const videosEle = videoEle.querySelector('#vid-upload')
                const loadingEle = loading('pre-video')
                videosEle.insertAdjacentElement('beforebegin', loadingEle)
                addBotton.classList.add('hide')
                upyun(vidUpload, encodeURIComponent(`/videos/{year}/{mon}/{day}/{hour}_{min}_{sec}_{filename}{.suffix}`)).then(result=>{
                    if(result.code === 200) {
                        ajax('POST', '/api/video', {
                            path: result['url'],
                            size: result['file_size'] || 0,
                            location: 'upyun',
                        }).then(res => {
                            if (res.code === 200) {
                                videoApi(result.fullurl)
                                loadingEle.remove()
                                video._id.push(res.data)
                            }
                        })
                    }
                })
            }
        })

    }
}