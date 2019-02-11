export default function sidebar() {
    const mainEle = document.createElement('div');
    mainEle.classList.add('sidebar');
    mainEle.insertAdjacentHTML('beforeend', `<div class="fixed"><ul></ul></div>`);
    return mainEle;
}