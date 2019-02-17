export default function() {
    const mainEle = document.createElement('div');
    mainEle.classList.add('personbox');

    mainEle.insertAdjacentHTML('beforeend', `
        <div class="inner">
            <div class="container">
                <div class="close"><a href="/"><span class="icon icon-index-close"></span></a></div>
                <div class="title">用户详情</div>
                <div class="box"></div>
            </div>
        </div>
    `)
    return mainEle;
}