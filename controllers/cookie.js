import {setCookie} from '../utils/cookie'

export default function() {
    window.addEventListener('load', ()=>{
        setCookie('isHave', 1)
        setCookie('page', 1)
    })
}
