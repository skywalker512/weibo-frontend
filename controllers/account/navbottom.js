import ajax from '../../utils/ajax'
import { notLogin } from '../../view/account/nav'

export function loginBottomController() {
    import(/* webpackChunkName: "account" */ '../../less/account/common.less');
    import(/* webpackChunkName: "account" */ '../../view/account/login').then(module => {
        const login = module.default;
        const loginEle = login();
        const body = document.querySelector('body');
        body.appendChild(loginEle);
        import(/* webpackChunkName: "account" */ './loginbox').then(module => {
            const loginController = module.default;
            loginController(body, loginEle)
        });
    });
}

export function logoutBottomController() {
    ajax('GET', '/api/logout').then(() => {
        const ele = document.querySelector('.account-list');
        ele.innerHTML = ''
        ele.appendChild(notLogin())
        notLoginController()
    })
}