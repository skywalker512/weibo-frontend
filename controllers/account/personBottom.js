export function userBottomController(id) {
    import(/* webpackChunkName: "person" */ '../../less/account/personBox.less');
    import(/* webpackChunkName: "person" */ '../../view/account/personBox').then(module => {
        const personBox = module.default;
        const personBoxEle = personBox();
        const body = document.querySelector('body');
        body.appendChild(personBoxEle);
        import(/* webpackChunkName: "person" */ './personBox').then(module => {
            const presonBoxController = module.default;
            presonBoxController(body, personBoxEle, id)
        })
    })
}