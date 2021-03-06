export default function header() {
    const mainEle = document.createElement('div');
    mainEle.classList.add('header');

    mainEle.insertAdjacentHTML('beforeend', `
    <div class="content">
        <div class="left">
            <div class="logo">
                <a href="/">
                    <span class="icon icon-font-weibo"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>
                    <span class="logo-text">微博</span>
                </a>
            </div>
            <div class="search">
                <input type="text" node-type="searchInput" autocomplete="off" value="" class="input">
                <a href="#" title="搜索" node-type="searchSubmit" ><span class="icon icon-nav-sreach"></span></a>
            </div>
        </div>
        <div class="right">
            <div class="nav">
                <ul class="list"></ul>
            </div>
            <div class="account-list"></div>
        </div>
    </div>`);

    return mainEle;
}