import sidebarEle from './sidebar'
import articleListEle from './article_list'
import articleTipsEle from  './article_tips'

// 用于 articleListController 中控制 是否显示 加载提示
export var tipsEle = articleTipsEle();

export default function indexEle() {
    var mainEle = document.createElement('div');
    mainEle.classList.add('frame');

    var rightEle = document.createElement('div');
    rightEle.classList.add('r_main');
    rightEle.appendChild(articleListEle());
    rightEle.appendChild(tipsEle);

    mainEle.appendChild(sidebarEle());
    mainEle.appendChild(rightEle);
    return mainEle;
}