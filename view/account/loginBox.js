export default function() {
    const mainEle = document.createElement('div');
    mainEle.classList.add('account');

    mainEle.insertAdjacentHTML('beforeend', `
        <div class="outer"></div>
        <div class="inner">
            <div class="container">
                <div class="close"><a href="/done"><span class="icon icon-index-close"></span></a></div>
                <div class="title">
                    <div class="text active">账号登陆</div>
                    <div class="text">短信登陆</div>
                </div>
                <div class="controller">
                    <div class="input">
                        <div class="username textarea">
                            <span class="icon icon-account-user"></span>
                            <input autocomplete="off" maxlength="128" name="username" id="username" spellcheck="false" type="text" value="" placeholder="邮箱/会员帐号">
                        </div>
                        <div class="password textarea">
                            <span class="icon icon-account-key"></span>
                            <input maxlength="24" name="password" id="password" type="password" value="" placeholder="密码">
                        </div>
                        <div id="geetest"></div>
                        <div class="auto">
                                <input type="checkbox" tabindex="5" id="login_form_savestate" node-type="savestate">
                                <label for="login_form_savestate" class="S_txt2">下次自动登录</label>
                                <span class="forget">
                                    忘记密码
                                </span>
                        </div>
                    </div>
                    <div class="button">
                        <a href="/done">
                            <button type="submit">登陆</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    `)
    return mainEle;
}