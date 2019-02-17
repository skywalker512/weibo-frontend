import ajax from '../utils/ajax'
import personBox from './acount/personBox'
import article from './indexBody/article'

export default async function(id) {
    await ajax('GET', '/api/user/'+id).then(result => {
        personBox(result.data.user);
        article(result.data.article, false, '.person-article');
    })
}