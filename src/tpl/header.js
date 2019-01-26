// 在 common.less 中使用 子级可以使用上级的
// import '../less/header.less';

import compile from '../js/compile'


var setting = [{
        id: 1,
        name: '首页',
        src: 'http://baidu.com'
    },
    {
        id: 2,
        name: '视频',
        src: 'http://youku.com'
    },
    {
        id: 3,
        name: '发现',
        src: '#',
    },
    {
        id: 4,
        name: '游戏',
        src: '#',
    }
]

export default function headerEleCom() {
    var mainEle = document.createElement('div');
    mainEle.classList.add('header');

    mainEle.insertAdjacentHTML('beforeend', `
    <div class="content">
        <div class="left">
            <div class="logo">
                <a href="#">
                    <span class="icon icon-font-weibo"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>
                </a>
            </div>
            <div class="search"></div>
        </div>
        <div class="right">
            <div class="nav">
                <ul class="list">
                    ${compile(`
                    {% for(var i=0; i < data.length; i++) { %} 
                        <li>
                            <a href={%=data[i].src %}>{%= data[i].name %}</a>
                        </li>
                    {% } %}
                </ul>`, setting)}
            </div>
            <div class="login">
                <ul class="list">
                    <li><a href="">注册</a></li>
                    <li class="grey-line"></li>
                    <li><a href="">登陆</a></li>
                </ul>
            </div>
        </div>
    </div>
    `)

    return mainEle;
}