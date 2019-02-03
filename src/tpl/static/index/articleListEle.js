import articleListController from '../../control/index/articleListController';

export default function articleListEle() {
    const mainEle = document.createElement('div');
    mainEle.classList.add('article_list');

    mainEle.appendChild(articleListController(mainEle));
    return mainEle;
}