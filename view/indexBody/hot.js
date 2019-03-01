export default function hot() {
    const hot = document.createElement('div');
    hot.classList.add('hot-list');
    hot.insertAdjacentHTML('beforeend', `
    <div class="hot-box">
        <div class="hot-title">微博实时热点</div>
        <div class="hot-article"></div>
    </div>
    `)
    return hot;
}