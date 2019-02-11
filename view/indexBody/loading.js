export default function loading() {
    const loading = document.createElement('div');
    loading.classList.add('article_tips','hide');
    loading.insertAdjacentHTML('beforeend', `
        <i class="W_loading"></i>正在加载中，请稍候...
    `)
    return loading;
}