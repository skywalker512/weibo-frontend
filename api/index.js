import ajax from '../utils/ajax';
import nav from './header/nav';
import siderbar from './indexBody/siderbar'
import article from './indexBody/article'

export default async function() {
    await ajax('GET', '/api/index').then((data) => {
        nav(data.link);
        siderbar(data.category);
        article(data.article);
    });
}