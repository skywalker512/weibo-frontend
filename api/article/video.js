import compile from '../../utils/compile'

export default function (data) {
    const ele  = document.querySelector('.video-push #vid-upload')
    ele.insertAdjacentHTML('beforebegin', compile(`
        <div class="pre-video">
            <video src="{%= data %}" style="width: 326px; height: 184px;" controls="true" preload="metadata">
                您的浏览器不支持HTML5
            </video>
        </div>
`, data))}