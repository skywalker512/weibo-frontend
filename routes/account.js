import { loginBottomController, logoutBottomController, registerBottomController }from '../controllers/account/navbottom'

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

}