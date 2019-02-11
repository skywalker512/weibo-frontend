import ajax from '../utils/ajax';
import article from './indexBody/article'

export default function (page, tag) {
    let url = '/api/article?page=' + page;
    if (tag) {
        url = '/api/category/' + tag + '?page=' + page;
    }
    let isHave
    ajax('GET', url).then((data)=>{
        isHave = data.lenght
        article(data)
    })
    return isHave
};