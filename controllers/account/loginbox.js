import { config } from "../../config";
import ajax from '../../utils/ajax'
import { logined } from '../../view/account/nav'
import userNav from '../../api/acount/userNav'

export default function loginController(body, loginEle) {
    { // 登陆框关闭
        const closeEle = document.querySelector('.account .close')
        closeEle.addEventListener('click', () => {
            body.removeChild(loginEle);
        });
    };

    // 登陆按钮
    let isPass = false
    const buttonEle = document.querySelector('.account .button');
    import( /* webpackIgnore: true */ 'https://static.geetest.com/static/tools/gt.js').then(()=>{
        ajax('GET', '/api/geetest/register').then(data=>{
            initGeetest({
                gt: data.gt,
                challenge: data.challenge,
                offline: !data.success,
                new_captcha: data.new_captcha,
                product: 'popup',
                width: '260px',
            }, function(captchaObj){
                captchaObj.appendTo('#geetest')
                captchaObj.onSuccess(function(){
                    const geetestRes = captchaObj.getValidate()
                    ajax('POST', '/api/geetest/validate', geetestRes).then(res=>{
                        isPass = res.is_pass
                    })
                })
            })
        })
    });
    { // 用户登陆信息判断
        const usernameInput = document.querySelector('#username');
        const passwordInput = document.querySelector('#password');
        const passEle = document.querySelector('#geetest')
        buttonEle.addEventListener('click', () => {
            let tipsName = document.querySelector('.account .tips.name .icon')
            let tipsPassword = document.querySelector('.account .tips.password .icon')
            let tipsPass = document.querySelector('.account .tips.pass .icon')
            const isName = config.namePattern.test(usernameInput.value)
            const isPassword = config.passwordPattern.test(passwordInput.value)

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

            if( !isPass && !tipsPass ) {
                passEle.insertAdjacentHTML('beforeend', `<div class="tips pass">请完成验证码<span class="icon icon-index-close"></span></div>`);
                tipsPass = document.querySelector('.account .tips.pass .icon')
                tipsPass.addEventListener('click', ()=>{
                    tipsPass.parentNode.remove();
                })
            } else if ( isPass && tipsPass ) {
                tipsPass.parentNode.remove();
            }

            if ( isName && isPassword && isPass) {
                ajax('POST', '/api/login', { info: usernameInput.value , password: passwordInput.value  }).then(result=>{
                    if( result.code === 200 ){
                        body.removeChild(loginEle);
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