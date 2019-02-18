export default function (postBoxEle, category) {
    const categoryBox = postBoxEle.querySelector('.category-container')
    {
        const closeEle = categoryBox.querySelector('.category-close')
        closeEle.addEventListener('click', () => {
            categoryBox.remove();
        })
    }

    {
        const categorys = categoryBox.querySelectorAll('.category-name')
        const categoryName = postBoxEle.querySelector('.categorytext')
        categorys.forEach(element => {
            element.addEventListener('click', function(){
                category._id = this.getAttribute("data-id")
                categoryName.innerText = this.innerText
                categoryBox.remove()
            })
        })
    }
}