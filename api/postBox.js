import ajax from '../utils/ajax'
import categoryBox from './article/categoryBox'

export default async function() {
    await ajax('GET', '/api/category').then(result => {
        categoryBox(result.data);
    })
}