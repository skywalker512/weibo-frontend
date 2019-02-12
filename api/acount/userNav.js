import compile from '../../utils/compile';
export default function(user) {
    const ele = document.querySelector('.account-list .list')
    ele.insertAdjacentHTML('afterbegin',compile(`
        <li><a href="" class="login">{%= agrs[0].name %}</a></li>
        <li class="grey-line"></li>
    `,user) )
}