export default function() {
    const ele = document.querySelectorAll('.sidebar a');
    ele.forEach((e) => {
        e.addEventListener('click', function () {
            ele.forEach((e) => {
                e.className = '';
            })
            this.className = 'active';
        })
    })
    const headerEle = document.querySelector('.logo a');
    headerEle.addEventListener('click', function () {
        ele.forEach((e) => {
            e.className = '';
        })
        ele[0].className = 'active';
    })
}