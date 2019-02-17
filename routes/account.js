import { loginBottomController, logoutBottomController, registerBottomController }from '../controllers/account/navbottom'
import {userBottomController} from '../controllers/account/personBottom'

export default function(route){
    route.get('/logout', () => {
        logoutBottomController()
    })

    route.get('/login', () => {
        loginBottomController()
    })

    route.get('/register',()=>{
        registerBottomController()
    })
    route.get('/user/:_id',(req)=>{
        userBottomController(req.params._id)
    })

}