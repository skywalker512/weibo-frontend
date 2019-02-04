import '../../control/index/siderbarController';

export default function sidebarEle() {
    const mainEle = document.createElement('div');
    mainEle.classList.add('sidebar');
    mainEle.insertAdjacentHTML('beforeend', `<ul></ul>`);
    return mainEle;
}