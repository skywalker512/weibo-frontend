import compile from '../../utils/compile';

export default function (data) {
    const ele = document.querySelector('.articlebox .box');
    ele.insertAdjacentHTML('beforeend', compile(`
        <span class="text">{%= agrs[0].article._id %}</span>
    `, data));
};