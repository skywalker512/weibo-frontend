import ajax from '../utils/ajax';
import article from './indexBody/article'

export default async function (page, tag) {
    let url = '/api/article?page=' + page;
    if (tag) {
        url = '/api/category/' + tag + '?page=' + page;
    }
    let isHave
    await ajax('GET', url).then(result=>{
        isHave = result.data.length
        article(result.data, false)
    })
    return isHave
};