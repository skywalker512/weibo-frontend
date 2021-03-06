import ajax from '../utils/ajax'
import article from './indexBody/article'

export async function searchApi(value) {
    await ajax('GET', '/api/search/'+encodeURIComponent(value) ).then(result=>{
        article(result.data, false, '.search-article');
    })
}