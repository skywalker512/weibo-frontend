import personApi from '../../api/personBox'

export default async function (body, personBoxEle, id) {
    body.classList.add('body-fixed')

    // 装载数据
    await personApi(id)

    { // 框关闭
        const closeEle = personBoxEle.querySelector('.close')
        closeEle.addEventListener('click', () => {
            personBoxEle.remove()
            body.classList.remove('body-fixed')
        });
    }
}