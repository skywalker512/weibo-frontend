import { notLogin, logined } from '../../view/account/nav'

export default function (user) {
    if( !user ){
        const ele = document.querySelector('.account-list');
        ele.appendChild(notLogin())
    } else {
        const ele = document.querySelector('.account-list');
        ele.appendChild(logined())
    }
}
