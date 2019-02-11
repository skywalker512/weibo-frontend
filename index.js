import '../less/common.less';
import headerEle from '../tpl/static/common/headerEle';
import indexEle from '../tpl/static/index/indexEle';
import '../tpl/router/test'

// 连接所有的 层级
document.body.appendChild(headerEle());
document.body.appendChild(indexEle());