export default function loginEle() {
    const mainEle = document.createElement('div');
    mainEle.classList.add('account');

    mainEle.insertAdjacentHTML('beforeend', `
        <div class="outer"></div>
        <div class="inner">
            <div class="container">
                <div class="title">
                    <span class="text">账号登陆</span>
                    <span class="text">短信登陆</span>
                </div>
                <div class="controller">
                    <div class="input">
                        <div class="username">
                            <input autocomplete="off" maxlength="128" tabindex="3" node-type="username" name="username" type="text" class="W_input" action-type="text_copy" action-data="text=邮箱/会员帐号/手机号" value="">
                        </div>
                        <div class="password">
                            <input maxlength="24" tabindex="4" node-type="password" name="password" type="password" class="W_input" action-type="text_copy" value="">
                        </div>
                        <div class="auto">
                                <input type="checkbox" tabindex="5" id="login_form_savestate" node-type="savestate">
                                <label for="login_form_savestate" class="S_txt2">下次自动登录</label>
                                <span class="forget">
                                    忘记密码
                                </span>
                        </div>
                    </div>
                    <div class="button">
                        <button type="submit">登陆</button>
                    </div>
                </div>
            </div>
        </div>
        
    `)
    return mainEle;
}