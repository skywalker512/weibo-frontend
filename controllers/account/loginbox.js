import { config } from "../../config";
import ajax from '../../utils/ajax'
import { logined } from '../../view/account/nav'

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
            if( !config.namePattern.test(usernameInput.value) && mark === 0) {
                usernameInput.insertAdjacentHTML('beforebegin', `<div class="tips">用户名必须大于4个字符小于16个字符<span class="icon icon-index-close"></span></div>`);
                mark = 1;
            } else if( !config.namePattern.test(passwordInput.value) && mark === 0) {
                passwordInput.insertAdjacentHTML('beforebegin', `<div class="tips">密码必须分别包含2个大小写字母,并且大于6个字符小于16个字符<span class="icon icon-index-close"></span></div>`);
                mark = 1;
            } else {
                ajax('POST', '/api/login', { info: usernameInput.value , password: passwordInput.value  }).then(result=>{
                    if( result.code === 200 ){
                        body.removeChild(loginEle);
                        const ele = document.querySelector('.account-list');
                        ele.innerHTML=''
                        ele.appendChild(logined())
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