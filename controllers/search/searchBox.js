import {searchApi} from '../../api/searchBox'

export default async function (searchBoxEle, value) {
    document.body.classList.add('body-fixed')

    // 装载数据
    await searchApi(value)

    { // 框关闭
        const closeEle = searchBoxEle.querySelector('.close')
        closeEle.addEventListener('click', () => {
            searchBoxEle.remove()
            document.body.classList.remove('body-fixed')
            const input = document.querySelector('.header .search input')
            input.value = ''
        });
    }

    { // 高亮关键词
        const tests = searchBoxEle.querySelectorAll('.text-box .text')
        for(let i=0; i < tests.length; i++) {
            const regex = new RegExp(value, 'i');
            const values = tests[i].textContent.split(regex)
            tests[i].innerHTML = values.join('<span class="search-light">' + value + '</span>');
        }
        if (tests.length === 0) {
            searchBoxEle.querySelector('.search-article.article_list').innerHTML = '<div class="no-article">没有结果，请换一个关键词</div>'
        }
    }
}