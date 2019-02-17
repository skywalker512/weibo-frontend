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
                {%= agrs[0].profile %}
                </div>
            </div>
        </div>

        <div class="person-article"></div>
    `, data));
};