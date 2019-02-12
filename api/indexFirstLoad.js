import ajax from '../utils/ajax';
import nav from './header/nav';
import siderbar from './indexBody/siderbar'
import article from './indexBody/article'
import user from './indexBody/user'

export default async function() {
    await ajax('GET', '/api/index').then(result => {
        nav(result.data.link);
        siderbar(result.data.category);
        article(result.data.article);
        user(result.data.user)
    });
}