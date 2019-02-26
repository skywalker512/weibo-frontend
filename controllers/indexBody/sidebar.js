export default function(id) {
    const ele = document.querySelectorAll('.sidebar a');

    if (id) {
        ele.forEach((e) => {
            if(e.href.split('//')[1].split('/')[2] === id){
                const active = document.querySelector('.sidebar a.active')
                active.classList.remove('active')
                e.classList.add('active')
                document.title = e.textContent + ' - Weibo'
            }
        })
    } else {
        const active = document.querySelector('.sidebar a.active')
        active.classList.remove('active')
        ele[0].classList.add('active')
        document.title = 'Weibo'
    }
}