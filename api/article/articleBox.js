import compile from '../../utils/compile';

export default function (data) {
    const ele = document.querySelector('.articlebox .box');
    ele.insertAdjacentHTML('beforeend', compile(`
        <div class="content">
            <div class="avatar">
                <img src={%= agrs[0].article.authorId.avatar%}>
            </div>
            <div class="text">
                <div class="name">
                    {%= agrs[0].article.authorId.name %}
                </div>
                {% const time = new Date(agrs[0].article.updatedAt) %}
                <div class="time">
                    {%= time.toLocaleString() %}
                </div>
                <div class="text-content">
                    {%= agrs[0].article.content %}
                </div>
            </div>
        </div>
        <div class="pic"></div>
        <div class="function">
            {% if( Number(agrs[0].status.isFavorite) === -1){ %}
            <div class="favorite">
            {% }else{ %}
            <div class="favorite isStatus">
            {% } %}
                <span class="icon icon-favorite"></span>
                <span class="favorite-text">{%= agrs[0].article.favoriteNum %}</span>
            </div>
            <div class="zhuanfa">
                <span class="icon icon-zhuanfa"></span>
                <span class="zhuanfa-text">转发</span>
            </div>
            <div class="pinglun">
                <span class="icon icon-pinglun"></span>
                <span class="pinglun-text">评论</span>
            </div>
            {% if( Number(agrs[0].status.isParise) === -1){ %}
            <div class="zan">
            {% }else{ %}
            <div class="zan isStatus">
            {% } %}
                <span class="icon icon-zan"></span>
                <span class="zan-text">{%= agrs[0].article.praiseNum %}</span>
            </div>
        </div>
        
    `, data));
};