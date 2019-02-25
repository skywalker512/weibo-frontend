export default function() {
    const mainEle = document.createElement('div');
    mainEle.classList.add('searchbox');

    mainEle.insertAdjacentHTML('beforeend', `
        <div class="inner">
            <div class="container">
                <div class="close"><a href=""><span class="icon icon-index-close"></span></a></div>
                <div class="title">搜索结果</div>
                <div class="box">
                    <div class="search-article"></div>
                </div>
            </div>
        </div>
    `)
    return mainEle;
}