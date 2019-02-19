import compile from '../../utils/compile';

export default function (data) {
    const ele = document.querySelector('.personbox .box');
    ele.insertAdjacentHTML('beforeend', compile(`
        <div class="content">
            <div class="avatar">
                <img src={%= agrs[0].avatar %}>
            </div>
            <div class="text">
                <div class="name">
                {%= agrs[0].name %}
                </div>
                <div class="profile">
                {% if( agrs[0].profile ){ %}
                    <span id="eidt-profile" class="{% if( agrs[0].isMe ){ %}editable{% } %}">{%= agrs[0].profile %}</span>
                {% }else{ %}
                    <span id="eidt-profile" class="{% if( agrs[0].isMe ){ %}editable{% } %}">一句话介绍一下自己吧，让别人更了解你</span>
                {% } %}
                </div>
            </div>
        </div>
        <div class="function">
            <div class="func-content favorite">
                <div>关注</div>
            </div>
            <div class="func-content article active">
                <div>帖子</div>
            </div>
        </div>

        <div class="person-article"></div>
        <div class="person-favorite hide"></div>
    `, data));
};