export default function (emojiEle, textarea, textNum) {
    { // 框关闭
        const closeEle = emojiEle.querySelector('.emoji-close a')
        closeEle.addEventListener('click', (e) => {
            e.preventDefault()
            emojiEle.remove()
        });
    }

    function add(str) {
        const startPos = textarea.selectionStart;
        const endPos = textarea.selectionEnd;
        textarea.value = textarea.value.substring(0, startPos) + str + textarea.value.substring(endPos, textarea.value.length);
        textarea.focus(); // 保持光标
        textarea.selectionStart = startPos + str.length; // 使光标放在加入元素的后面
        textarea.selectionEnd = startPos + str.length;
    }

    {
        const emojis = emojiEle.querySelectorAll('.emojis div')
        emojis.forEach(value => {
            value.addEventListener('click', function(){
                add(this.innerHTML)
                textNum.innerText = textarea.value.length
            })
        })
    }
}
