import ajax from '../utils/ajax'
import userNav from './acount/userNav'

export function userNav() {
    ajax('GET', 'api/user').then(result=>{
        userNav(result)
    })
}