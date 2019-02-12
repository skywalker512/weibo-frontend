import ajax from '../../utils/ajax'
import { notLogin } from '../../view/account/nav'

export function loginBottomController() {
    import(/* webpackChunkName: "account" */ '../../less/account/common.less');
    import(/* webpackChunkName: "account" */ '../../view/account/loginBox').then(module => {
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

export function registerBottomController() {
    import(/* webpackChunkName: "account" */ '../../less/account/common.less');
    import(/* webpackChunkName: "account" */ '../../view/account/registerBox').then(module => {
        const register = module.default;
        const registerEle = register();
        const body = document.querySelector('body');
        body.appendChild(registerEle);
        import(/* webpackChunkName: "account" */ './registerBox').then(module => {
            const registerController = module.default;
            registerController(body, registerEle)
        });
    });
}

export function logoutBottomController() {
    ajax('GET', '/api/logout').then(() => {
        const ele = document.querySelector('.account-list');
        ele.innerHTML = ''
        ele.appendChild(notLogin())
        history.pushState(null, null,'./')
    })
}