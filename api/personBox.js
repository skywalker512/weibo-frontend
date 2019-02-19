import ajax from '../utils/ajax'
import personBox from './acount/personBox'
import article from './indexBody/article'

export async function personApi(id) {
    await ajax('GET', '/api/user/'+id).then(result => {
        personBox(result.data.user);
        article(result.data.article, false, '.person-article');
    })
}

export async function personFavoriteApi(id) {
    await ajax('GET', `/api/user/${id}/favorite`).then(result => {
        article(result.data, false, '.person-favorite');
    })
}