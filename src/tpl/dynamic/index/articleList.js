import compile from '../../../js/compile';
import md5 from 'js-md5'


export default function articleList(data, ele, callback) {
    const ele = document.querySelector()
    ele.insertAdjacentHTML('beforeend', compile(`
        {% for(let i=0; i < agrs[0].length; i++) { %} 
            <div>
                <div class="a_text" href="article/{%=agrs[0][i].id%}">
                    <div class="text">{%= agrs[0][i].content %}</div>
                    <div class="info">
                        {% const md5_mail = agrs[1](agrs[0][i].owner.belong_to.email) %} 
                        <span class="avatar"><img src="https://cdn.v2ex.com/gravatar/{%= md5_mail %}?d=retro&s=64"></span>
                        <span class="name">{%= agrs[0][i].owner.belong_to.username %}</span>
                        <span class="time">{%= agrs[0][i].add_date %}</span>
                    </div>
                </div>
            </div>
        {% } %}
        `, data, md5));
    (callback && typeof (callback) === "function") && callback();
};
