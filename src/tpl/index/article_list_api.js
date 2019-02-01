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
                    <div class="info">
                        <div class="user">
                            {% let md5_mail = md5(data[i].owner.belong_to.email) %} 
                            <div class="avatar"><img src="https://cdn.v2ex.com/gravatar/{%= md5_mail %}?d=retro&s=64"></div>
                            <div class="name">{%= data[i].owner.belong_to.username %}</div>
                        </div>
                        <div class="time">{%= data[i].add_date %}</div>
                    </div>
                </div>
            </div>
        {% } %}
        `, data));
        (callback && typeof(callback) === "function") && callback();
    });
}
