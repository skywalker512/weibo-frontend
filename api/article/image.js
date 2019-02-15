import compile from '../../utils/compile'

export default function (data) {
    const ele  = document.querySelector('.image #upload')
    ele.insertAdjacentHTML('beforebegin', compile(`
        <div class="pre-image">
            <img img src="{%= data %}">
        </div>
`, data))}