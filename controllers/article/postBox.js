export default function(body, postBoxEle) {
    { // 框关闭
        const closeEle = document.querySelector('.post .close')
        closeEle.addEventListener('click', () => {
            body.removeChild(postBoxEle);
        });
    };
}