import compile from '../js/compile';
import { getUsefulContents } from '../js/ajax';



getUsefulContents('http://127.0.0.1:8000/api/setting/link?format=json', data => {
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


