import compile from '../../../js/compile';

export default function sidebar(tag) {
    const ele = document.querySelector('.sidebar ul');
    ele.insertAdjacentHTML('beforeend', compile(`
        <li>
            <a href="#" class="active">
                <span class="text">全部</span>
            </a>
        </li>
    {% for(let i=0; i < agrs[0].length; i++) { %} 
        <li>
            <a href="tag/{%=agrs[0][i].id%}">
                <span class="text">{%= agrs[0][i].name %}</span>
            </a>
        </li>
    {% } %}
    `, tag));
};
