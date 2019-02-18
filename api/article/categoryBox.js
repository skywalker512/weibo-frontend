import compile from '../../utils/compile';

export default function (data) {
    const ele = document.querySelector('.post .category');
    ele.insertAdjacentHTML('beforeend', compile(`
        <div class="category-container">
            <div class="category-close"><a><span class="icon icon-index-close"></span></a></div>
            <div class="category-title">选择分类</div>
            <div class="category-box">
            {% for(let i=0; i < agrs[0].length; i++) { %}
                <div class="category-name" data-id="{%= agrs[0][i]._id %}">{%= agrs[0][i].name %}</div>
            {% } %}
            </div>
            </div>
        </div>

    `, data));
};