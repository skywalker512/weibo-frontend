export default function header() {
    const loginButton = document.querySelector('.header .login');
    loginButton.addEventListener('click', () => {
        import(/* webpackChunkName: "account" */ '../../less/account/common.less');
        import(/* webpackChunkName: "account" */ '../../view/account/login').then(module => {
            const login = module.default;
            const loginEle = login();
            const body = document.querySelector('body');
            body.appendChild(loginEle);
            import(/* webpackChunkName: "account" */ './login').then(module => {
                const loginController = module.default;
                loginController(body, loginEle)
            });
        });
    });
}