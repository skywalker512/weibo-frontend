import compile from '../../utils/compile';

export default function article(article) {
    const ele = document.querySelector('.hot-article')
    ele.insertAdjacentHTML('beforeend', 
    compile(`
        {% for(let i=0; i < agrs[0].length; i++) { %} 
            <div class="single-article">
                {% if( agrs[0][i].images.length > 0){ %}
                <a class="a_text single-image" href="/article/{%=agrs[0][i]._id%}">
                    <div class="img">
                        <img src="{%= agrs[0][i].images[0].url %}!carousel">
                    </div>
                {% } else { %}
                <a class="a_text" href="/article/{%=agrs[0][i]._id%}">
                {% } %}
                    <div class="text-box">
                        <div class="text">{%= agrs[0][i].content %}</div>
                    </div>
                </a>
            </div>
        {% } %}
    `,
    article));
};