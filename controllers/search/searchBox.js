import {searchApi} from '../../api/searchBox'

export default async function (searchBoxEle, value) {
    document.body.classList.add('body-fixed')

    // 装载数据
    await searchApi(value)

    { // 框关闭
        const closeEle = searchBoxEle.querySelector('.close')
        closeEle.addEventListener('click', () => {
            history.back()
            searchBoxEle.remove()
            document.body.classList.remove('body-fixed')
        });
    }

    { // 高亮关键词
        const tests = searchBoxEle.querySelectorAll('.text-box .text')
        for(let i=0; i < tests.length; i++) {
            const values = tests[i].textContent.split(value)
            tests[i].innerHTML = values.join('<span class="search-light">' + value + '</span>');
        }

    }
}