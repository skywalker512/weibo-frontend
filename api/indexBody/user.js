import { notLogin, logined } from '../../view/account/nav'
import userNav from '../acount/userNav'

export default function (user) {
    if( !user ){
        const ele = document.querySelector('.account-list');
        ele.appendChild(notLogin())
    } else {
        const ele = document.querySelector('.account-list');
        ele.appendChild(logined())
        userNav(user)
    }
}
