export default function() {
    const mainEle = document.createElement('div');
    mainEle.classList.add('account');

    mainEle.insertAdjacentHTML('beforeend', `
        <div class="outer"></div>
        <div class="inner">
            <div class="container">
                <div class="close"><a href="/done"><span class="icon icon-index-close"></span></a></div>
                <div class="title">
                    <div class="text active">邮箱注册</div>
                    <div class="text">手机注册</div>
                </div>
                <div class="controller">
                    <div class="input">
                        <div class="username textarea">
                            <span class="icon icon-account-user"></span>
                            <input autocomplete="off" maxlength="20" name="email" id="email" spellcheck="false" type="text" value="" placeholder="邮箱">
                        </div>
                        <div class="username textarea">
                            <span class="icon icon-account-user"></span>
                            <input autocomplete="off" maxlength="20" name="username" id="username" spellcheck="false" type="text" value="" placeholder="用户名">
                        </div>
                        <div class="password textarea">
                            <span class="icon icon-account-key"></span>
                            <input maxlength="24" name="password" id="password" type="password" value="" placeholder="密码">
                        </div>
                        <div class="password textarea">
                            <span class="icon icon-account-key"></span>
                            <input maxlength="24" name="apassword" id="apassword" type="password" value="" placeholder="重复密码">
                        </div>
                    </div>
                    <div id="geetest"></div>
                    <div class="button">
                        <a href="/done">
                            <button type="submit">注册</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    `)
    return mainEle;
}