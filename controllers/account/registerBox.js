import { config } from "../../config";
import ajax from '../../utils/ajax'
import { logined } from '../../view/account/nav'
import userNav from '../../api/acount/userNav'
import geetest from './geetest'

export default function registerController(body, registerEle) {
    { // 框关闭
        const closeEle = document.querySelector('.account .close')
        closeEle.addEventListener('click', () => {
            history.back()
            body.removeChild(registerEle);
        });
    };

    // 登陆按钮
    let status = { isPass: false }
    geetest(status)
    const buttonEle = document.querySelector('.account .button');
    { // 用户登陆信息判断
        const emailInput = document.querySelector('#email');
        const usernameInput = document.querySelector('#username');
        const passwordInput = document.querySelector('#password');
        const apasswordInput = document.querySelector('#apassword');
        const passEle = document.querySelector('#geetest')

        buttonEle.addEventListener('click', () => {
            let tipsEmail = document.querySelector('.account .tips.email .icon')
            let tipsName = document.querySelector('.account .tips.name .icon')
            let tipsPassword = document.querySelector('.account .tips.password .icon')
            let tipsaPassword = document.querySelector('.account .tips.apassword .icon')
            let tipsPass = document.querySelector('.account .tips.pass .icon')
            const isEmail = config.emailPattern.test(emailInput.value)
            const isName = config.namePattern.test(usernameInput.value)
            const isPassword = config.passwordPattern.test(passwordInput.value)
            const isaPassword = passwordInput.value === apasswordInput.value

            if ( !isEmail && !tipsEmail ) {
                emailInput.insertAdjacentHTML('beforebegin', `<div class="tips email">请输入正确的邮箱地址<span class="icon icon-index-close"></span></div>`);
                tipsEmail = document.querySelector('.account .tips.email .icon')
                tipsEmail.addEventListener('click', ()=>{
                    tipsEmail.parentNode.remove();
                })
            } else if (isEmail && tipsEmail) {
                tipsEmail.parentNode.remove();
            }

            if( !isName && !tipsName ) {
                usernameInput.insertAdjacentHTML('beforebegin', `<div class="tips name">用户名必须大于4个字符小于16个字符<span class="icon icon-index-close"></span></div>`);
                tipsName = document.querySelector('.account .tips.name .icon')
                tipsName.addEventListener('click', ()=>{
                    tipsName.parentNode.remove();
                })
            } else if (isName && tipsName) {
                tipsName.parentNode.remove();
            }

            if( !isPassword && !tipsPassword ) {
                passwordInput.insertAdjacentHTML('beforebegin', `<div class="tips password">密码必须分别包含2个大小写字母,并且大于6个字符小于16个字符<span class="icon icon-index-close"></span></div>`);
                tipsPassword = document.querySelector('.account .tips.password .icon')
                tipsPassword.addEventListener('click', ()=>{
                    tipsPassword.parentNode.remove();
                })
            } else if ( isPassword && tipsPassword ) {
                tipsPassword.parentNode.remove();
            }

            if( !tipsaPassword && !isaPassword ) {
                apasswordInput.insertAdjacentHTML('beforebegin', `<div class="tips apassword">两次输入的密码不相同<span class="icon icon-index-close"></span></div>`);
                tipsaPassword = document.querySelector('.account .tips.apassword .icon')
                tipsaPassword.addEventListener('click', ()=>{
                    tipsaPassword.parentNode.remove();
                })
            } else if ( tipsaPassword && isaPassword ) {
                tipsaPassword.parentNode.remove();
            }

            if( !status.isPass && !tipsPass ) {
                passEle.insertAdjacentHTML('beforeend', `<div class="tips pass">请完成验证码<span class="icon icon-index-close"></span></div>`);
                tipsPass = document.querySelector('.account .tips.pass .icon')
                tipsPass.addEventListener('click', ()=>{
                    tipsPass.parentNode.remove();
                })
            } else if ( status.isPass && tipsPass ) {
                tipsPass.parentNode.remove();
            }
            
            if(isEmail && isName && isPassword && isaPassword && status.isPass) {
                ajax('POST', '/api/register', { name: usernameInput.value , password: passwordInput.value, email: emailInput.value }).then(result=>{
                    if( result.code === 200 ){
                        body.removeChild(registerEle)
                        const ele = document.querySelector('.account-list');
                        ele.innerHTML=''
                        ele.appendChild(logined())
                        userNav(result.data)
                    }
                })
            };
        });
    };
}