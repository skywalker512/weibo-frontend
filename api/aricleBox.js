import ajax from '../utils/ajax'
import articleBox from './article/articleBox'

export default function(articleId) {
    ajax('GET', '/api/article/'+articleId).then(result => {
        articleBox(result.data);
    })
}