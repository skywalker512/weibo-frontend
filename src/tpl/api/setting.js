import { getData } from '../../js/ajax';
import header from '../dynamic/common/header';
import sidebar from '../dynamic/index/sidebar'

getData('/api/setting', data => {
    header(data.link)
    sidebar(data.tag);
});