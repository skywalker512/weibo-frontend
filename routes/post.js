import { postBottomController }from '../controllers/article/postbottom'

export default function(router){
    router.get('/post', () => {
        postBottomController()
    })
}