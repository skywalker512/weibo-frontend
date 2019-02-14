import compile from '../../utils/compile';

export default function article(article) {
    const ele = document.querySelector('.article_list')
    ele.insertAdjacentHTML('afterbegin', 
    compile(`
        {% for(let i=0; i < agrs[0].length; i++) { %} 
            <div>
                <a class="a_text" href="/article/{%=agrs[0][i]._id%}">
                    <div class="text">{%= agrs[0][i].content %}</div>
                    <div class="info">
                        <div class="left">
                            <span class="avatar"><img src={%= agrs[0][i].authorId.avatar%}></span>
                            <span class="name">{%= agrs[0][i].authorId.name %}</span>
                            {% const time = new Date(agrs[0][i].updatedAt) %}
                            <span class="time">{%= time.toLocaleString() %}</span>
                        </div>
                        <div class="right">
                            <span class="icon icon-pinglun"></span>
                            <span class="text pinglun">{%= agrs[0][i].commentNum %}</span>
                            <span class="grey-line"></span>                            
                            <span class="icon icon-zan"></span>
                            <span class="text zan">{%= agrs[0][i].praiseNum %}</span>
                        </div>
                    </div>
                </a>
            </div>
        {% } %}
    `,
    article));
};