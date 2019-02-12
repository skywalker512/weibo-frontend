import { config } from "../../config";
import ajax from '../../utils/ajax'

export default function registerController(body, registerEle) {
    { // 框关闭
        const closeEle = document.querySelector('.account .close')
        closeEle.addEventListener('click', () => {
            body.removeChild(registerEle);
        });
    };

    // 登陆按钮
    const buttonEle = document.querySelector('.account .button');
    { // 用户登陆信息判断
        const emailInput = document.querySelector('#email');
        const usernameInput = document.querySelector('#username');
        const passwordInput = document.querySelector('#password');
        const apasswordInput = document.querySelector('#apassword');
        let mark = 0;
        buttonEle.addEventListener('click', () => {
            if ( !config.emailPattern.test(emailInput.value && mark === 0) ) {
                emailInput.insertAdjacentHTML('beforebegin', `<div class="tips">请输入正确的邮箱地址<span class="icon icon-index-close"></span></div>`);
                mark = 1;
            } else if( !config.namePattern.test(usernameInput.value) && mark === 0) {
                usernameInput.insertAdjacentHTML('beforebegin', `<div class="tips">用户名必须大于4个字符小于16个字符<span class="icon icon-index-close"></span></div>`);
                mark = 1;
            } else if( !config.namePattern.test(passwordInput.value) && mark === 0) {
                passwordInput.insertAdjacentHTML('beforebegin', `<div class="tips">密码必须分别包含2个大小写字母,并且大于6个字符小于16个字符<span class="icon icon-index-close"></span></div>`);
                mark = 1;
            } else if ( passwordInput.value !== apasswordInput.value ) {
                passwordInput.insertAdjacentHTML('beforebegin', `<div class="tips">两次密码不相同<span class="icon icon-index-close"></span></div>`);
                mark = 1;
            } else {
                ajax('POST', '/api/register', { name: usernameInput.value , password: passwordInput.value, email: emailInput.value }).then(result=>{
                    if( result.code === 200 ){
                        body.removeChild(registerEle);
                    }
                })

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