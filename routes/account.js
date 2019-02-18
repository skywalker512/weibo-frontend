import { loginBottomController, logoutBottomController, registerBottomController }from '../controllers/account/navbottom'
import {userBottomController} from '../controllers/account/personBottom'

export default function(router){
    router.get('/logout', () => {
        logoutBottomController()
    })

    router.get('/login', () => {
        loginBottomController()
    })

    router.get('/register',()=>{
        registerBottomController()
    })
    router.get('/user/:_id',(req)=>{
        userBottomController(req.params._id)
    })

}