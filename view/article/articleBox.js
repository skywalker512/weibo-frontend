export default function() {
    const mainEle = document.createElement('div');
    mainEle.classList.add('articlebox');

    mainEle.insertAdjacentHTML('beforeend', `
        <div class="outer"></div>
        <div class="inner">
            <div class="container">
                <div class="close"><a href="/done"><span class="icon icon-index-close"></span></a></div>
                <div class="title">文章详情</div>
                <div class="box"></div>
            </div>
        </div>
        
    `)
    return mainEle;
}