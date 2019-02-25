import ajax from '../utils/ajax';
import article from './indexBody/article'
import siderbar from '../controllers/indexBody/sidebar'

export default async function (page, tag) {
    let url = '/api/article?page=' + page;
    if (tag) {
        url = '/api/category/' + tag + '?page=' + page;
    }
    let isHave
    await ajax('GET', url).then(result=>{
        isHave = result.data.length
        if (tag) document.title = result.data[0].categoryId.name + ' - Weibo'
        else document.title = 'Weibo'
        article(result.data, false)
    })
    siderbar(tag)
    return isHave
};