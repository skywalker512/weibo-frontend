window.onload = (function (oldLoad) {
    return function () {
        oldLoad && oldLoad();
        (function () {
            console.log('1')
            const ele = document.querySelectorAll('.sidebar a');
            ele.forEach((e) => {
                e.addEventListener('click', function() {
                    ele.forEach((e) => {
                        e.className = '';
                    })
                    this.className = 'active';
                })
            })
        })()
    }
})(window.onload)