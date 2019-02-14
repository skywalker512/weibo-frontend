export function articleBottomController(articleId) {
    import(/* webpackChunkName: "articlebox" */ '../../less/article/articleBox.less');
    import(/* webpackChunkName: "articlebox" */ '../../view/article/articleBox').then(module => {
        const articleBox = module.default;
        const articleBoxEle = articleBox();
        const body = document.querySelector('body');
        body.appendChild(articleBoxEle);
        import(/* webpackChunkName: "articlebox" */ './articleBox').then(module => {
            const articleBoxController = module.default;
            articleBoxController(body, articleBoxEle, articleId)
        })
    })
}