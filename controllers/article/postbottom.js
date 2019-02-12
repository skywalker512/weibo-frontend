export function postBottomController() {
    import(/* webpackChunkName: "postbox" */ '../../less/article/postBox.less');
    import(/* webpackChunkName: "postbox" */ '../../view/article/postBox').then(module => {
        const postBox = module.default;
        const postBoxEle = postBox();
        const body = document.querySelector('body');
        body.appendChild(postBoxEle);
        import(/* webpackChunkName: "postbox" */ './postBox').then(module => {
            const postBoxController = module.default;
            postBoxController(body, postBoxEle)
        });
    });
}