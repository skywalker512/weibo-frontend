import {articleBottomController} from '../controllers/article/articleBottom'

export default function(router){
    router.get('/article/:_id', (req) => {
        articleBottomController(req.params._id)
    })
}