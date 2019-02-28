export default function() {
    const mainEle = document.createElement('div');
    mainEle.classList.add('account');

    mainEle.insertAdjacentHTML('beforeend', `
        <div class="outer"></div>
        <div class="inner">
            <div class="container">
                <div class="close"><a href=""><span class="icon icon-index-close"></span></a></div>
                <div class="title">
                    <div class="text active" name="email">账号登陆</div>
                    <div class="text" name="phone">短信登陆</div>
                </div>
                <div class="controller">
                    <div class="input" id="loginbyemail">
                        <div class="username textarea">
                            <span class="icon icon-account-user"></span>
                            <input autocomplete="off" maxlength="50" name="username" id="username" spellcheck="false" type="text" value="" placeholder="邮箱/会员帐号">
                        </div>
                        <div class="password textarea">
                            <span class="icon icon-account-key"></span>
                            <input maxlength="50" name="password" id="password" type="password" value="" placeholder="密码">
                        </div>
                        <div id="geetest"></div>
                        <div class="auto">
                                <input type="checkbox" tabindex="5" id="login_form_savestate" node-type="savestate">
                                <label for="login_form_savestate" class="S_txt2">下次自动登录</label>
                                <span class="forget">
                                    忘记密码
                                </span>
                        </div>
                        <div class="button" id="emailbutton">
                            <a href="/done">
                                <button type="submit">登陆</button>
                            </a>
                        </div>
                    </div>
                    <div class="input hide" id="loginbyphone">
                        <div class="phone textarea">
                            <span class="icon icon-phone-square"></span>
                            <input autocomplete="off" maxlength="50" name="phone" id="phone" spellcheck="false" type="text" value="" placeholder="手机号码">
                        </div>
                        <div class="test">
                            <div id="testephonebutton">获取验证码</div>
                            <div class="testephone textarea">
                                <input autocomplete="off" maxlength="50" name="testphone" id="testphone" spellcheck="false" type="text" value="" placeholder="验证码">
                            </div>
                        </div>
                        <div class="auto">
                                <input type="checkbox" tabindex="5" id="login_form_savestate" node-type="savestate">
                                <label for="login_form_savestate" class="S_txt2">下次自动登录</label>
                        </div>
                        <div class="button" id="phonebutton">
                            <a href="/done">
                                <button type="submit">登陆</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    `)
    return mainEle;
}