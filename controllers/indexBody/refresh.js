export default function () {
    document.querySelector('#refresh-refresh').addEventListener('click', () => {
        location.reload()
    })

    document.querySelector('#refresh-up').addEventListener('click', () => {
        const originalPos = window.pageYOffset;
        const scrollToTop = window.setInterval(function () {
            const pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - originalPos / 20); // 每次循环的步长
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 20);
    })
}