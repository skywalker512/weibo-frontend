import './siderbar_api';

export default function sidebarEle() {
    const mainEle = document.createElement('div');
    mainEle.classList.add('sidebar');
    mainEle.insertAdjacentHTML('beforeend', `<ul></ul>`);
    return mainEle;
}