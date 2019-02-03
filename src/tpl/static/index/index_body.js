import sidebarEle from '../common/sidebar'
import articleListEle from './article_list'
import articleTipsEle from './article_tips'
import '../../api/setting'

// 用于 articleListController 中控制 是否显示 加载提示
export const tipsEle = articleTipsEle();

export default function indexEle() {
    const mainEle = document.createElement('div');
    mainEle.classList.add('frame');

    const rightEle = document.createElement('div');
    rightEle.classList.add('r_main');
    rightEle.appendChild(articleListEle());
    rightEle.appendChild(tipsEle);

    mainEle.appendChild(sidebarEle());
    mainEle.appendChild(rightEle);
    return mainEle;
}