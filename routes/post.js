import { postBottomController }from '../controllers/article/postbottom'

export default function(route){
    route.get('/post', () => {
        postBottomController()
    })
}