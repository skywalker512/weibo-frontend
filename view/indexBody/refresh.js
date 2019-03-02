export default function () {
    const refresh = document.createElement('div');
    refresh.classList.add('refresh');
    refresh.insertAdjacentHTML('beforeend', `
        <div class="box" id="refresh-refresh"><span class="icon icon-index-rec"></span></div>
        <div class="box" id="refresh-up"><span class="icon icon-index-top"></span></div>
    `)
    return refresh;
}