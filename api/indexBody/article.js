import compile from '../../utils/compile';

export default function article(article) {
    const ele = document.querySelector('.article_list')
    ele.insertAdjacentHTML('beforeend', 
    compile(`
        {% for(let i=0; i < agrs[0].length; i++) { %} 
            <div>
                <div class="a_text" href="article/{%=agrs[0][i]._id%}">
                    <div class="text">{%= agrs[0][i].content %}</div>
                    <div class="info">
                        <span class="avatar"><img src={%= agrs[0][i].authorId.avatar%}></span>
                        <span class="name">{%= agrs[0][i].authorId.name %}</span>
                        {% const time = new Date(agrs[0][i].createdAt) %}
                        <span class="time">{%= time.toLocaleString() %}</span>
                    </div>
                </div>
            </div>
        {% } %}
    `,
    article));
};