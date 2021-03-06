export default function() {
    const mainEle = document.createElement('div');
    mainEle.classList.add('image');

    mainEle.insertAdjacentHTML('beforeend', `
        <div class="img-container">
            <div class="image-close"><a><span class="icon icon-index-close"></span></a></div>
            <div class="image-title">图片上传</div>
            <div class="image-box">
                <div class="text"></div>
                <div class="images">
                    <input type="file" id="img-upload" class="upload" accept="image/*">
                    <label for="img-upload">
                        <div class="add-image">+</div>
                    </label>
                </div>
            </div>
        </div>
        
    `)
    return mainEle;
}