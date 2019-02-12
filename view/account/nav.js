export function notLogin () {
    const mainEle = document.createElement('ul');
    mainEle.classList.add('list');

    mainEle.insertAdjacentHTML('beforeend', `
    <li><a href="/login" class="login">登陆</a></li>
    <li class="grey-line"></li>
    <li><a href="/register" class="register">注册</a></li>
    `);
    return mainEle;
}

export function logined () {
    const mainEle = document.createElement('ul');
    mainEle.classList.add('list');

    mainEle.insertAdjacentHTML('beforeend', `
    <li><a href="/logout" class="logout">登出</a></li>
    `);
    return mainEle;
}

