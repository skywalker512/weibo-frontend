import ajax from '../utils/ajax';
import nav from './header/nav';
import siderbar from './indexBody/siderbar'
import article from './indexBody/article'
import user from './indexBody/user'
import hot from './indexBody/hot'

export default async function() {
    await ajax('GET', '/api/index').then(result => {
        nav(result.data.link);
        siderbar(result.data.category);
        article(result.data.article);
        hot(result.data.hot)
    });

    await ajax('GET', '/api/user').then(result =>{
        user(result.data)
    })
}