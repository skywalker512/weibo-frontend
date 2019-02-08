window.addEventListener('load', () => {
    const loginEle = document.querySelector('.header .login');
    loginEle.addEventListener('click', () => {
        import(/* webpackChunkName: "loginEle" */ '../../static/account/loginEle').then(module => {
            const login = module.default;
            const loginEle = login();
            const body = document.querySelector('body');
            body.appendChild(loginEle);
            const closeEle = document.querySelector('.account .close');
            closeEle.addEventListener('click', ()=> {
                body.removeChild(loginEle);
            });
        });
    });
});