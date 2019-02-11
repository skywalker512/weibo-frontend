export  default function () {
    const noMore = document.createElement('div');
    noMore.classList.add('article_tips','hide', 'article_nomore');
    noMore.insertAdjacentHTML('beforeend', `
        <i class="W_loading"></i>没有更多了
    `)
    return noMore;
}