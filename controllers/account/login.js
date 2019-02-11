export default function loginController(body, loginEle) {
    { // 登陆框关闭
        const closeEle = document.querySelector('.account .close')
        closeEle.addEventListener('click', () => {
            body.removeChild(loginEle);
        });
    };

    // 登陆按钮
    const buttonEle = document.querySelector('.account .button');
    { // 用户登陆信息判断
        const usernameInput = document.querySelector('#username');
        const passwordInput = document.querySelector('#password');
        let mark = 0;
        buttonEle.addEventListener('click', () => {
            if(usernameInput.value === '' && mark === 0) {
                usernameInput.insertAdjacentHTML('beforebegin', `<div class="tips">请输入登录名<span class="icon icon-index-close"></span></div>`);
                mark = 1;
            } else if(passwordInput.value === '' && mark === 0) {
                passwordInput.insertAdjacentHTML('beforebegin', `<div class="tips">请输入密码<span class="icon icon-index-close"></span></div>`);
                mark = 1;
            } else {
                
            };

            if (mark === 1) {
                const tipsCloseEle = document.querySelector('.account .tips .icon-index-close');
                tipsCloseEle.addEventListener('click', () => {
                    tipsCloseEle.parentNode.parentNode.removeChild(tipsCloseEle.parentNode);
                    mark = 0;
                });
            };
        });
    };
}