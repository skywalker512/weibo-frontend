export default function() {
    const mainEle = document.createElement('div');
    mainEle.classList.add('video');

    mainEle.insertAdjacentHTML('beforeend', `
        <div class="vid-container">
            <div class="video-close"><a><span class="icon icon-index-close"></span></a></div>
            <div class="video-title">视频上传</div>
            <div class="video-box">
                <div class="text"></div>
                <div class="videos">
                    <input type="file" id="vid-upload" class="upload" accept="video/mp4,video/x-m4v,video/*">
                    <label for="vid-upload">
                        <div class="add-video">+</div>
                    </label>
                </div>
            </div>
        </div>
        
    `)
    return mainEle;
}