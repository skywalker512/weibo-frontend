import compile from '../../utils/compile';

export default function header(link) {
    const ele = document.querySelector('.header .nav .list');
    ele.insertAdjacentHTML('beforeend', compile(`
    {% for(let i=0; i < agrs[0].length; i++) { %} 
        <li>
            <a href={%=agrs[0][i].src%}>
                <span class="icon icon-{%=agrs[0][i].icon%}"></span>
                <span class="text">{%= agrs[0][i].name %}</span>
            </a>
        </li>
    {% } %}
    `, link));
};