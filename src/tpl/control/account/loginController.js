export default function loginController(body, loginEle) {
    const closeEle = document.querySelector('.account .close')
    closeEle.addEventListener('click', () => {
        body.removeChild(loginEle);
    });
}
