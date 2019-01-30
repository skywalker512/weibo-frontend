import compile from '../../js/compile';
import { getData } from '../../js/ajax';

export default function articleListApi(page, ele, callback) {
    var url = '/api/article/list/';
    url += page;
    getData(url, data => {
        ele.insertAdjacentHTML('beforeend', compile(`
        {% for(var i=0; i < data.length; i++) { %} 
            <div>
                <div class="a_text" href="article/{%=data[i].id%}">
                    <div class="text">{%= data[i].content %}</div>
                </div>
            </div>
        {% } %}
        `, data));
        (callback && typeof(callback) === "function") && callback();
    });
}
