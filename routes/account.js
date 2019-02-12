import { loginBottomController, logoutBottomController }from '../controllers/account/navbottom'

export default function(route){
    route.get('/logout', () => {
        logoutBottomController()
    })

    route.get('/login', () => {
        loginBottomController()
    })
}