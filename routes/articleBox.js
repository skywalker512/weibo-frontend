import {articleBottomController} from '../controllers/article/articleBottom'

export default function(route){
    route.get('/article/:_id', (req) => {
        articleBottomController(req.params._id)
    })
}