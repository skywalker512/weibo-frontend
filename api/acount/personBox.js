import compile from '../../utils/compile';

export default function (data) {
    const ele = document.querySelectorAll('.personbox .box');
    const inEle = ele[ele.length - 1]
    inEle.insertAdjacentHTML('beforeend', compile(`
        <div class="content">
            <input type="file" id="avatar-upload" class="hide" accept="image/*">
            <div class="avatar">
                <img src="{%= agrs[0].avatar %}">
                {% if( agrs[0].isMe ){ %}
                <label for="avatar-upload">
                    <div class="mask">
                        <span class="icon icon-edit"></span>
                    </div>
                </label>
                {% } %}
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
                <div class="star">
                    粉丝: {%= agrs[0].starMeNum %} | 关注: {%= agrs[0].starOtherNum %}
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

        <div class="person-article article_list"></div>
        <div class="person-favorite article_list hide"></div>
    `, data));
};