import {ajax} from '../../js/ajax';
import header from '../dynamic/common/header';
import sidebar from '../dynamic/index/sidebar';
import articleList from '../dynamic/index/articleList';

const res = ajax('GET', '/api/index');
res.then((data) => {
    header(data.links);
    sidebar(data.categorys);
    articleList(data.articles);
});