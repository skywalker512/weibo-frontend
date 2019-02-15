export default function() {
    const mainEle = document.createElement('div');
    mainEle.classList.add('emoji');

    mainEle.insertAdjacentHTML('beforeend', `
        <div class="emoji-container">
            <div class="emoji-close"><a href="/post"><span class="icon icon-index-close"></span></a></div>
            <div class="emoji-title">选择表情</div>
            <div class="emoji-box">
                <div class="emojis">
                    <div>😀</div>
                    <div>😁</div>
                    <div>😂</div>
                    <div>🤣</div>
                    <div>😃</div>
                    <div>😄</div>
                    <div>😅</div>
                    <div>😆</div>
                    <div>😉</div>
                    <div>😊</div>
                    <div>😋</div>
                    <div>😎</div>
                    <div>😍</div>
                    <div>😘</div>
                    <div>😗</div>
                    <div>😙</div>
                    <div>😚</div>
                    <div>🙂</div>
                    <div>🤗</div>
                    <div>🤩</div>
                    <div>🤔</div>
                    <div>🤨</div>
                    <div>😐</div>
                    <div>😑</div>
                    <div>😶</div>
                    <div>🙄</div>
                    <div>😏</div>
                    <div>😣</div>
                    <div>😥</div>
                    <div>😮</div>
                    <div>🤐</div>
                    <div>😯</div>
                    <div>😪</div>
                    <div>😫</div>
                    <div>😴</div>
                    <div>😌</div>
                    <div>😛</div>
                    <div>😜</div>
                    <div>😝</div>
                    <div>🤤</div>
                    <div>😒</div>
                    <div>😓</div>
                    <div>😔</div>
                    <div>😕</div>
                    <div>🙃</div>
                    <div>🤑</div>
                    <div>😲</div>
                    <div>🙁</div>
                    <div>😖</div>
                    <div>😞</div>
                    <div>😟</div>
                    <div>😤</div>
                    <div>😢</div>
                    <div>😭</div>
                    <div>😦</div>
                    <div>😧</div>
                    <div>😨</div>
                    <div>😩</div>
                    <div>🤯</div>
                    <div>😬</div>
                    <div>😰</div>
                    <div>😱</div>
                    <div>😳</div>
                    <div>🤪</div>
                    <div>😵</div>
                    <div>😡</div>
                    <div>😠</div>
                    <div>🤬</div>
                    <div>😷</div>
                    <div>🤒</div>
                    <div>🤕</div>
                    <div>🤢</div>
                    <div>🤮</div>
                    <div>🤧</div>
                    <div>😇</div>
                    <div>🤠</div>
                    <div>🤡</div>
                    <div>🤥</div>
                    <div>🤫</div>
                    <div>🤭</div>
                    <div>🧐</div>
                    <div>🤓</div>
                    <div>😈</div>
                    <div>👿</div>
                    <div>👹</div>
                    <div>👺</div>
                    <div>💀</div>
                    <div>👻</div>
                    <div>👽</div>
                    <div>🤖</div>
                    <div>💩</div>
                    <div>😺</div>
                    <div>😸</div>
                    <div>😹</div>
                    <div>😻</div>
                    <div>😼</div>
                    <div>😽</div>
                    <div>🙀</div>
                    <div>😿</div>
                </div>
            </div>
        </div>
        
    `)
    return mainEle;
}