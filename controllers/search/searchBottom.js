export default function () {
    const sreachBottom = document.querySelector('.header .search .icon.icon-nav-sreach')
    sreachBottom.addEventListener('click', ()=>{
        const input = document.querySelector('.header .search input')
        if (input.value.length > 0) {
            import(/* webpackChunkName: "searchbox" */ '../../less/search/searchBox.less');
            import(/* webpackChunkName: "searchbox" */ '../../view/search/searchBox').then(module => {
                const searchBox = module.default;
                const searchBoxEle = searchBox();
                document.body.appendChild(searchBoxEle);
                import(/* webpackChunkName: "searchbox" */ './searchBox').then(module => {
                    const searchBoxController = module.default;
                    searchBoxController(searchBoxEle, input.value)
                })
            })
        }
    })
}