import compile from '../../utils/compile';

export default function (data, stauts) {
    const ele = document.querySelector('.body-tips');
    ele.insertAdjacentHTML('beforeend', 
    compile(`
        <div class="{%= agrs[1] %}">
            <div class="close"><a href=""><span class="icon icon-index-close"></span></a></div>
            <div class="text">{%= agrs[0] %}</div>
        </div>
    `,
    data, stauts));
};