import compile from '../js/compile';
import { getData } from '../js/ajax';



getData('/api/setting/link', data => {
    var ele = document.querySelector('.nav .list');
    ele.insertAdjacentHTML('beforeend', compile(`
    {% for(var i=0; i < data.length; i++) { %} 
        <li>
            <a href={%=data[i].src%}>
                <span class="icon icon-{%=data[i].icon%}"></span>
                <span class="text">{%= data[i].name %}</span>
            </a>
        </li>
    {% } %}
    `, data))
});
