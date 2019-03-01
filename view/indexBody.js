import sidebar from './indexBody/sidebar'
import article from './indexBody/article'
import loading from './indexBody/loading'
import noMore from './indexBody/noMore'
import hot from './indexBody/hot'

function right() {
    const right = document.createElement('div');
    right.classList.add('article_waterfall');

    right.appendChild(article());
    right.appendChild(loading());
    right.appendChild(noMore())

    return right;
}

export default function indexBody() {
    const indexBody = document.createElement('div');
    indexBody.classList.add('frame');

    indexBody.appendChild(sidebar());
    indexBody.appendChild(right());
    indexBody.appendChild(hot())

    return indexBody;
}