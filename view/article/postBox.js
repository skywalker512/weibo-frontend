export default function() {
    const mainEle = document.createElement('div');
    mainEle.classList.add('post');

    mainEle.insertAdjacentHTML('beforeend', `
        <div class="outer"></div>
        <div class="inner">
            <div class="container">
                <div class="close"><span class="icon icon-index-close"></span></div>
            </div>
        </div>
        
    `)
    return mainEle;
}