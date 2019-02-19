export default function () {
    const bodyTips = document.querySelector('.body-tips')
    const tips = document.querySelectorAll('.body-tips > div')
    const now = tips[tips.length - 1]
    const close = now.querySelector('.close')
    close.addEventListener('click', () => {
        bodyTips.removeChild(now);
    });

    if (tips.length > 3) {
        bodyTips.removeChild(tips[0]);
    }
}