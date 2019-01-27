import compile from '../../js/compile';
import { getData } from '../../js/ajax';



getData('/api/setting/tag', data => {
    var ele = document.querySelector('.sidebar ul');
    ele.insertAdjacentHTML('beforeend', compile(`
        <li>
            <a href="#" class="active">
                <span class="text">全部</span>
            </a>
        </li>
    {% for(var i=0; i < data.length; i++) { %} 
        <li>
            <a href="tag/{%=data[i].id%}">
                <span class="text">{%= data[i].name %}</span>
            </a>
        </li>
    {% } %}
    `, data))
});