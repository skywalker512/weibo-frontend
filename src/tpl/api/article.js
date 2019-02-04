import { getData } from '../../js/ajax';
import articleList from '../dynamic/index/articleList';

export default function article(page, ele, callback, tag) {
    let url = '/api/article/list/' + page;
    if (tag) {
        url = '/api/article/tag/' + tag + '/' + page;
        console.log(url)
    }
    getData(url, data => {
        articleList(data, ele, callback)
    })
};