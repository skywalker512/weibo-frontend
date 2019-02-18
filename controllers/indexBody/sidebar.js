export default function(id) {
    const ele = document.querySelectorAll('.sidebar a');

    if (id) {
        ele.forEach((e) => {
            if(e.href.split('//')[1].split('/')[2] === id){
                const active = document.querySelector('.sidebar a.active')
                active.classList.toggle('active')
                e.classList.toggle('active')
            }
        })
    } else {
        const active = document.querySelector('.sidebar a.active')
        active.classList.toggle('active')
        ele[0].classList.toggle('active')
    }
}