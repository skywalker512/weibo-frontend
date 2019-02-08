window.addEventListener('load', () => {
    const loginEle = document.querySelector('.header .login');
    loginEle.addEventListener('click', () => {
        import(/* webpackChunkName: "loginEle" */ '../../../less/account/common.less');
        import(/* webpackChunkName: "loginEle" */ './loginEle').then(module => {
            const login = module.default;
            const loginEle = login();
            const body = document.querySelector('body');
            body.appendChild(loginEle);
            import(/* webpackChunkName: "loginEle" */ '../../control/account/loginController').then(module => {
                const loginController = module.default;
                loginController(body, loginEle)
            });
        });
    });
});