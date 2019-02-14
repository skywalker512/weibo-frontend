import ajax from '../utils/ajax'
import articleBox from './article/articleBox'

export default async function(articleId) {
    await ajax('GET', '/api/article/'+articleId).then(result => {
        articleBox(result.data);
    })
}