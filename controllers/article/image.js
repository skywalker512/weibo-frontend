export default async function (imgBottom, imageEle, pic) {
    { // 框关闭
        const closeEle = imageEle.querySelector('.image-close a')
        closeEle.addEventListener('click', (e) => {
            e.preventDefault()
            imageEle.remove();
        });
    }
}