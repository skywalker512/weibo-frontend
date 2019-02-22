import compile from '../../utils/compile';

export default function article(article, isBegin=true, selector='.article_list') {
    const ele = document.querySelector(selector)
    const order = isBegin ? 'afterbegin' : 'beforeend'
    ele.insertAdjacentHTML(order, 
    compile(`
        {% for(let i=0; i < agrs[0].length; i++) { %} 
            <div>
                {% if( agrs[0][i].images.length === 1){ %}
                <a class="a_text single-image" href="/article/{%=agrs[0][i]._id%}">
                    <div class="img">
                        <img src="{%= agrs[0][i].images[0].url %}!indexbody">
                    </div>
                    <div class="text-box">
                        <div class="text">{%= agrs[0][i].content %}</div>
                {% }else if( agrs[0][i].images.length > 1){ %}
                <a class="a_text multiple-image" href="/article/{%=agrs[0][i]._id%}">
                    <div class="text-box">
                        <div class="text">{%= agrs[0][i].content %}</div>
                    <div class="img">
                        {% for(let j=0; j < 4; j++) { %}
                            <div><img src="{%= agrs[0][i].images[j].url %}!indexbody"></div>
                        {% } %}
                    </div>
                {% }else{ %}
                <a class="a_text" href="/article/{%=agrs[0][i]._id%}">
                    <div class="text-box">
                        <div class="text">{%= agrs[0][i].content %}</div>
                {% } %}
                        <div class="info">
                            <div class="left">
                                <div class="avatar"><img src={%= agrs[0][i].authorId.avatar%}></div>
                                <div class="name">{%= agrs[0][i].authorId.name %}</div>
                                {% const time = new Date(agrs[0][i].updatedAt) %}
                                <div class="time">{%= time.toLocaleString() %}</div>
                            </div>
                            <div class="right">
                                <span class="icon icon-pinglun"></span>
                                <span class="text pinglun">{%= agrs[0][i].commentNum %}</span>
                                <span class="grey-line"></span>                            
                                <span class="icon icon-zan"></span>
                                <span class="text zan">{%= agrs[0][i].praiseNum %}</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        {% } %}
    `,
    article));
};