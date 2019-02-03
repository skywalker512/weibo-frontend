import compile from '../js/compile';
import { getData } from '../js/ajax';



getData('/api/setting/link', data => {
    var ele = document.querySelector('.nav .list');
    ele.insertAdjacentHTML('beforeend', compile(`
    {% for(var i=0; i < agrs[0].length; i++) { %} 
        <li>
            <a href={%=agrs[0][i].src%}>
                <span class="icon icon-{%=agrs[0][i].icon%}"></span>
                <span class="text">{%= agrs[0][i].name %}</span>
            </a>
        </li>
    {% } %}
    `, data))
});
