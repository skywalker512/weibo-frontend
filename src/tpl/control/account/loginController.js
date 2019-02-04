window.addEventListener('load', () => {
    const loginEle = document.querySelector('.header .login');
    loginEle.addEventListener('click', () => {
        import(/* webpackChunkName: "loginEle" */ '../../static/account/loginEle').then(module => {
            const loginEle = module.default;
            const body = document.querySelector('body');
            body.appendChild(loginEle());
        });
    })
})