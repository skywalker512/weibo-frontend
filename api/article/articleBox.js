import compile from '../../utils/compile';

export default function (data) {
    const ele = document.querySelectorAll('.articlebox .box');
    const inEle = ele[ele.length - 1]
    inEle.insertAdjacentHTML('beforeend', compile(`
        <div class="content">
            <div class="avatar">
                <a href="/user/{%= agrs[0].article.authorId._id %}">
                    <img src="{%= agrs[0].article.authorId.avatar%}">
                </a>
            </div>
            <div class="text">
                <div class="name">
                    <a href="/user/{%= agrs[0].article.authorId._id %}">
                        {%= agrs[0].article.authorId.name %}
                    </a>
                    {% if( Number(agrs[0].status.isMe) === 0){ %}
                        <div class="star" user-data="{%= agrs[0].article.authorId._id %}">
                        {% if( Number(agrs[0].status.isStar) === 0){ %}
                            <span class="icon icon-plus"></span>关注
                        {% }else{ %}
                            已关注
                        {% } %}
                        </div>
                    {% } %}
                </div>
                {% const time = new Date(agrs[0].article.createdAt) %}
                <div class="time">
                    {%= time.toLocaleString() %}
                </div>
                <div class="text-content">
                    {%= agrs[0].article.content %}
                </div>
                {% if( agrs[0].article.videos.length === 1){ %}
                <video src="{%= agrs[0].article.videos[0].url %}" style="width: 500px; height: 282px;" controls="true" preload="metadata">
                    您的浏览器不支持HTML5
                </video>
                {% } %}
            </div>
        </div>
        {% if( agrs[0].article.images.length !== 0){ %}
        <div class="pic">
            <div class="big-image"><img src="{%= agrs[0].article.images[0].url %}"></div>
            <div class="small-image">
                <div class="current"><img src="{%= agrs[0].article.images[0].url %}!carousel"></div>
                {% for(let i=1; i < agrs[0].article.images.length; i++) { %}
                <div><img src="{%= agrs[0].article.images[i].url %}!carousel"></div>
                {% } %}
            </div>
        </div>
        {% } %}

        <div class="function">
            {% if( Number(agrs[0].status.isFavorite) === 0){ %}
            <div class="favorite">
            {% }else{ %}
            <div class="favorite isStatus">
            {% } %}
                <span class="icon icon-favorite"></span>
                <span class="text favorite-text">{%= agrs[0].article.favoriteNum %}</span>
            </div>
            <div class="zhuanfa">
                <span class="icon icon-zhuanfa"></span>
                <span class="text zhuanfa-text">转发</span>
            </div>
            <div class="pinglun">
                <span class="icon icon-pinglun"></span>
                <span class="text pinglun-text">{%= agrs[0].article.commentNum %}</span>
                <span class="arrow"></span>
            </div>
            {% if( Number(agrs[0].status.isPraise) === 0){ %}
            <div class="zan">
            {% }else{ %}
            <div class="zan isStatus">
            {% } %}
                <span class="icon icon-zan"></span>
                <span class="text zan-text">{%= agrs[0].article.praiseNum %}</span>
            </div>
        </div>

        <div class="comment">
            <div class="post-comment">
                <div class="post-input">
                    <div class="input">
                        <textarea spellcheck="false" maxlength="140"></textarea>
                    </div>
                    <div class="controller">
                        <div class="function">
                            <span class="icon icon-article-emoji"></span>
                        </div>
                        <div class="submit">
                            <button type="submit">评论</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="comment-list"></div>
        </div>
    `, data));
};