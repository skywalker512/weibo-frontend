import compile from '../../utils/compile';

export default function sidebar(categorys) {
    const ele = document.querySelector('.sidebar ul');
    ele.insertAdjacentHTML('beforeend', 
    compile(`
        <li>
            <a href="/" class="active">
                <span class="text">全部</span>
            </a>
        </li>
    {% for(let i=0; i < agrs[0].length; i++) { %} 
        <li>
            <a href="/category/{%=agrs[0][i]._id%}">
                <span class="text">{%= agrs[0][i].name %}</span>
            </a>
        </li>
    {% } %}`,
    categorys));
};