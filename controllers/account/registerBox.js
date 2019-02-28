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

    let wait = 60 // 邮箱验证码倒计时，用于重置

    {   // 用户登陆信息判断
        // 登陆按钮
        let status = { isPass: false, captchaObj: {} }
        geetest(status)
        const buttonEle = document.querySelector('#emailbutton');
        const emailInput = document.querySelector('#email');
        const usernameInput = document.querySelector('#username');
        const passwordInput = document.querySelector('#password');
        const apasswordInput = document.querySelector('#apassword');
        const passEle = document.querySelector('#geetest')
        const testInput = document.querySelector('#testemail')

        buttonEle.addEventListener('click', () => {
            let tipsEmail = document.querySelector('.account .tips.email .icon')
            let tipsName = document.querySelector('.account .tips.name .icon')
            let tipsPassword = document.querySelector('.account .tips.password .icon')
            let tipsaPassword = document.querySelector('.account .tips.apassword .icon')
            let tipsPass = document.querySelector('.account .tips.pass .icon')
            let tipsTest = document.querySelector('.account .tips.test .icon')
            const isEmail = config.emailPattern.test(emailInput.value)
            const isName = config.namePattern.test(usernameInput.value)
            const isPassword = config.passwordPattern.test(passwordInput.value)
            const isaPassword = passwordInput.value === apasswordInput.value
            const isTest = config.testPattern.test(testInput.value)

            if (!isEmail && !tipsEmail) {
                emailInput.insertAdjacentHTML('beforebegin', `<div class="tips email">请输入正确的邮箱地址<span class="icon icon-index-close"></span></div>`);
                tipsEmail = document.querySelector('.account .tips.email .icon')
                tipsEmail.addEventListener('click', () => {
                    tipsEmail.parentNode.remove();
                })
            } else if (isEmail && tipsEmail) {
                tipsEmail.parentNode.remove();
            }

            if (!isTest && !tipsTest) {
                testInput.insertAdjacentHTML('beforebegin', `<div class="tips test">请输入6位验证码<span class="icon icon-index-close"></span></div>`);
                tipsTest = document.querySelector('.account .tips.test .icon')
                tipsTest.addEventListener('click', () => {
                    tipsTest.parentNode.remove();
                })
            } else if (isTest && tipsTest) {
                tipsTest.parentNode.remove();
            }

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

            if (!tipsaPassword && !isaPassword) {
                apasswordInput.insertAdjacentHTML('beforebegin', `<div class="tips apassword">两次输入的密码不相同<span class="icon icon-index-close"></span></div>`);
                tipsaPassword = document.querySelector('.account .tips.apassword .icon')
                tipsaPassword.addEventListener('click', () => {
                    tipsaPassword.parentNode.remove();
                })
            } else if (tipsaPassword && isaPassword) {
                tipsaPassword.parentNode.remove();
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

            if (isEmail && isName && isPassword && isaPassword && status.isPass && isTest) {
                ajax('POST', '/api/register', { name: usernameInput.value, password: passwordInput.value, email: emailInput.value, code: testInput.value }).then(result => {
                    if (result.code === 200) {
                        body.removeChild(registerEle)
                        const ele = document.querySelector('.account-list');
                        ele.innerHTML = ''
                        ele.appendChild(logined())
                        userNav(result.data)
                    } else {
                        wait = 0
                        status.captchaObj.reset()
                    }
                })
            };
        });
    }
    // 验证码公用函数
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

    { // 邮箱验证码
        const testButton = registerEle.querySelector('#testemailbutton')

        testButton.addEventListener('click', () => {
            if (wait === 60) {
                const emailInput = document.querySelector('#email')
                let tipsEmail = document.querySelector('.account .tips.email .icon')
                const isEmail = config.emailPattern.test(emailInput.value)
                if (!isEmail && !tipsEmail) {
                    emailInput.insertAdjacentHTML('beforebegin', `<div class="tips email">请输入正确的邮箱地址<span class="icon icon-index-close"></span></div>`);
                    tipsEmail = document.querySelector('.account .tips.email .icon')
                    tipsEmail.addEventListener('click', () => {
                        tipsEmail.parentNode.remove();
                    })
                } else if (isEmail && tipsEmail) {
                    tipsEmail.parentNode.remove();
                }
                if (isEmail) {
                    time(testButton)
                    ajax('POST', '/api/user/verifyemail', { email: emailInput.value }).then(res => {
                        if (res.code !== 200) {
                            wait = 0
                        }
                    })
                }
            }
        })
    }

    { // 登录方式选择
        const emailBotton = registerEle.querySelector('[name="email"]')
        const phoneBotton = registerEle.querySelector('[name="phone"]')
        const emailBox = registerEle.querySelector('#loginbyemail')
        const phoneBox = registerEle.querySelector('#loginbyphone')
        emailBotton.addEventListener('click', () => {
            emailBotton.classList.add('active')
            phoneBotton.classList.remove('active')
            emailBox.classList.remove('hide')
            phoneBox.classList.add('hide')
            if (wait !== 60) wait = 0
        })
        phoneBotton.addEventListener('click', () => {
            phoneBotton.classList.add('active')
            emailBotton.classList.remove('active')
            phoneBox.classList.remove('hide')
            emailBox.classList.add('hide')
            if (wait !== 60) wait = 0
        })
    }

    { // 手机注册验证码
        const testButton = registerEle.querySelector('#testephonebutton')

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

    { // 手机注册
        const buttonEle = document.querySelector('#phonebutton')
        const phoneInput = document.querySelector('#phone');
        const usernameInput = document.querySelector('#phone-username');
        const testInput = document.querySelector('#testphone')

        buttonEle.addEventListener('click', () => {
            let tipsName = document.querySelector('.account .tips.name .icon')
            let tipsTest = document.querySelector('.account .tips.test .icon')
            const isName = config.namePattern.test(usernameInput.value)
            const isTest = config.testPattern.test(testInput.value)

            if (!isName && !tipsName) {
                usernameInput.insertAdjacentHTML('beforebegin', `<div class="tips name">用户名必须大于4个字符小于16个字符<span class="icon icon-index-close"></span></div>`);
                tipsName = document.querySelector('.account .tips.name .icon')
                tipsName.addEventListener('click', () => {
                    tipsName.parentNode.remove();
                })
            } else if (isName && tipsName) {
                tipsName.parentNode.remove();
            }

            if (!isTest && !tipsTest) {
                testInput.insertAdjacentHTML('beforebegin', `<div class="tips test">请输入6位验证码<span class="icon icon-index-close"></span></div>`);
                tipsTest = document.querySelector('.account .tips.test .icon')
                tipsTest.addEventListener('click', () => {
                    tipsTest.parentNode.remove();
                })
            } else if (isTest && tipsTest) {
                tipsTest.parentNode.remove();
            }


            if (isName && isTest) {
                ajax('POST', '/api/registerbyphone', { name: usernameInput.value, phone: phoneInput.value, code: testInput.value }).then(result => {
                    if (result.code === 200) {
                        body.removeChild(registerEle)
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
}