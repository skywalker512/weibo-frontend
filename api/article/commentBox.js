import compile from '../../utils/compile';

export default function (data) {
    const ele = document.querySelector('.articlebox .comment-list');
    ele.insertAdjacentHTML('afterbegin', compile(`
        {% for(let i=0; i < agrs[0].length; i++) { %} 
            <div class="text">{%= agrs[0][i].content %}</div>
            <div class="info">
                <div class="left">
                    <span class="avatar"><img src={%= agrs[0][i].authorId.avatar%}></span>
                    <span class="name">{%= agrs[0][i].authorId.name %}</span>
                    {% const time = new Date(agrs[0][i].updatedAt) %}
                    <span class="time">{%= time.toLocaleString() %}</span>
                </div>
                {% if( Number(agrs[0][i].isPraise) === 0){ %}
                <div class="right" data-index="{%= agrs[0][i]._id %}">
                {% }else{ %}
                <div class="right isStatus" data-index="{%= agrs[0][i]._id %}">                     
                {% } %}
                    <span class="icon icon-zan"></span>
                    <span class="text zan">{%= agrs[0][i].praiseNum %}</span>
                </div>
            </div>
        {% } %}
    `, data));
};