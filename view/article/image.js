export default function() {
    const mainEle = document.createElement('div');
    mainEle.classList.add('image');

    mainEle.insertAdjacentHTML('beforeend', `
        <div class="img-container">
            <div class="image-close"><a href="/post"><span class="icon icon-index-close"></span></a></div>
            <div class="image-title">图片上传</div>
            <div class="image-box">
                <div class="text"></div>
                <div class="images">
                    <input type="file" id="upload" accept="image/*">
                    <label for="upload">
                        <div class="add-image">+</div>
                    </label>
                </div>
            </div>
        </div>
        
    `)
    return mainEle;
}