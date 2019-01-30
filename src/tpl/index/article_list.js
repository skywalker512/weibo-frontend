import articleListController from './article_list_controller';

export default function articleListEle() {
    var mainEle = document.createElement('div');
    mainEle.classList.add('article_list');

    mainEle.appendChild(articleListController(mainEle));
    return mainEle;
}