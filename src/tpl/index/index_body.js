import sidebarEle from './sidebar'

export default function indexEle() {
    var mainEle = document.createElement('div');
    mainEle.classList.add('frame');

    mainEle.appendChild(sidebarEle());
    return mainEle;
}