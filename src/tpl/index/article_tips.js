export default function articleTipsEle() {
    const mainEle = document.createElement('div');
    mainEle.classList.add('article_tips','hide');
    mainEle.insertAdjacentHTML('beforeend', `
        <i class="W_loading"></i>正在加载中，请稍候...
    `)
    return mainEle;
}