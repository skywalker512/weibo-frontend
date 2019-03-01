import { config } from "../../config";
import ajax from '../../utils/ajax'
import { logined } from '../../view/account/nav'
import user from '../../api/indexBody/user'
import geetest from './geetest'
import oauth from './oauth'

export default function loginController(body, loginEle) {
    { // 登陆框关闭
        const closeEle = document.querySelector('.account .close')
        closeEle.addEventListener('click', () => {
            history.back()
            body.removeChild(loginEle);
        });
    };
    const isKeepInput = document.querySelector('#login_form_savestate')
    { // 用户登陆信息判断
        let status = { isPass: false }
        geetest(status)
        const buttonEle = document.querySelector('#emailbutton');
        const usernameInput = document.querySelector('#username');
        const passwordInput = document.querySelector('#password');
        const passEle = document.querySelector('#geetest')
        buttonEle.addEventListener('click', () => {
            let tipsName = document.querySelector('.account .tips.name .icon')
            let tipsPassword = document.querySelector('.account .tips.password .icon')
            let tipsPass = document.querySelector('.account .tips.pass .icon')
            const isName = config.namePattern.test(usernameInput.value)
            const isPassword = config.passwordPattern.test(passwordInput.value)

            if (!isName && !tipsName) {
                usernameInput.insertAdjacentHTML('beforebegin', `<div class="tips name">用户名必须大于4个字符小于16个字符<span class="icon icon-index-close"></span></div>`);
                tipsName = document.querySelector('.account .tips.name .icon')
                tipsName.addEventListener('click', () => {
                    tipsName.parentNode.remove();
                })
            } else if (isName && tipsName) {
                tipsName.parentNode.remove();
            }

            if (!isPassword && !tipsPassword) {
                passwordInput.insertAdjacentHTML('beforebegin', `<div class="tips password">密码必须分别包含2个大小写字母,并且大于6个字符小于16个字符<span class="icon icon-index-close"></span></div>`);
                tipsPassword = document.querySelector('.account .tips.password .icon')
                tipsPassword.addEventListener('click', () => {
                    tipsPassword.parentNode.remove();
                })
            } else if (isPassword && tipsPassword) {
                tipsPassword.parentNode.remove();
            }

            if (!status.isPass && !tipsPass) {
                passEle.insertAdjacentHTML('beforeend', `<div class="tips pass">请完成验证码<span class="icon icon-index-close"></span></div>`);
                tipsPass = document.querySelector('.account .tips.pass .icon')
                tipsPass.addEventListener('click', () => {
                    tipsPass.parentNode.remove();
                })
            } else if (status.isPass && tipsPass) {
                tipsPass.parentNode.remove();
            }
            const isKeep = isKeepInput.checked ? 1 : 0
            if (isName && isPassword && status.isPass) {
                ajax('POST', '/api/login', { info: usernameInput.value, password: passwordInput.value, isKeep }).then(result => {
                    if (result.code === 200) {
                        body.removeChild(loginEle);
                        user(result.data)
                    }
                })
            };
        });
    };

    { // 登录方式选择
        const emailBotton = loginEle.querySelector('[name="email"]')
        const phoneBotton = loginEle.querySelector('[name="phone"]')
        const emailBox = loginEle.querySelector('#loginbyemail')
        const phoneBox = loginEle.querySelector('#loginbyphone')
        emailBotton.addEventListener('click', () => {
            emailBotton.classList.add('active')
            phoneBotton.classList.remove('active')
            emailBox.classList.remove('hide')
            phoneBox.classList.add('hide')
        })
        phoneBotton.addEventListener('click', () => {
            phoneBotton.classList.add('active')
            emailBotton.classList.remove('active')
            phoneBox.classList.remove('hide')
            emailBox.classList.add('hide')
        })
    }
    let wait = 60 // 邮箱验证码倒计时，用于重置
    function time(ele) {
        if (wait === 0) {
            ele.innerText = '获取验证码'
            wait = 60
        } else {
            ele.innerText = `${wait} 秒`
            wait--
            setTimeout(function() {
                    time(ele)
                },
                1000)
        }
    }

    { // 手机注册验证码
        const testButton = loginEle.querySelector('#testephonebutton')

        testButton.addEventListener('click', () => {
            if (wait === 60) {
                const phoneInput = document.querySelector('#phone')
                let tipsPhone = document.querySelector('.account .tips.phone .icon')
                const isPhone = config.phonePattern.test(phoneInput.value)
                if (!isPhone && !tipsPhone) {
                    phoneInput.insertAdjacentHTML('beforebegin', `<div class="tips phone">请输入正确的手机号码<span class="icon icon-index-close"></span></div>`);
                    tipsPhone = document.querySelector('.account .tips.phone .icon')
                    tipsPhone.addEventListener('click', () => {
                        tipsPhone.parentNode.remove();
                    })
                } else if (isPhone && tipsPhone) {
                    tipsPhone.parentNode.remove();
                }
                if (isPhone) {
                    time(testButton)
                    ajax('POST', '/api/user/verifyphone', { phone: phoneInput.value }).then(res => {
                        if (res.code !== 200) {
                            wait = 0
                        }
                    })
                }
            }
        })
    }

    { // 手机登录
        const buttonEle = document.querySelector('#phonebutton')
        const phoneInput = document.querySelector('#phone');
        const testInput = document.querySelector('#testphone')

        buttonEle.addEventListener('click', () => {
            let tipsTest = document.querySelector('.account .tips.test .icon')
            const isTest = config.testPattern.test(testInput.value)

            if (!isTest && !tipsTest) {
                testInput.insertAdjacentHTML('beforebegin', `<div class="tips test">请输入6位验证码<span class="icon icon-index-close"></span></div>`);
                tipsTest = document.querySelector('.account .tips.test .icon')
                tipsTest.addEventListener('click', () => {
                    tipsTest.parentNode.remove();
                })
            } else if (isTest && tipsTest) {
                tipsTest.parentNode.remove();
            }
            const isKeep = isKeepInput.checked ? 1 : 0
            if (isTest) {
                ajax('POST', '/api/loginbyphone', { phone: phoneInput.value, code: testInput.value, isKeep }).then(result => {
                    if (result.code === 200) {
                        body.removeChild(loginEle);
                        const ele = document.querySelector('.account-list');
                        ele.innerHTML = ''
                        ele.appendChild(logined())
                        userNav(result.data)
                    } else {
                        wait = 0
                    }
                })
            };
        });
    }

    oauth(loginEle)
}