import '../../control/index/siderbarController';

export default function sidebarEle() {
    const mainEle = document.createElement('div');
    mainEle.classList.add('sidebar');
    mainEle.insertAdjacentHTML('beforeend', `<div class="fixed"><ul></ul></div>`);
    return mainEle;
}