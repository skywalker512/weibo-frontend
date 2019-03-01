import { config } from '../../config'
import user from '../../api/indexBody/user'
import ajax from '../../utils/ajax'

const oauthUrl = config.apiUrl + '/api/oauth'
const width = 600, height = 400;
const winWidth = window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth, winHeight = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight
const left = (winWidth - width) / 2, top = (winHeight - height) / 2


export default function (ele) {
    function listenClose(openWin) {
        const timer = setInterval(() => {
            if (openWin.closed) {
                clearInterval(timer)
                document.body.removeChild(ele);
                history.pushState(null, null, '/done')
                ajax('GET', '/api/user').then(result =>{
                    user(result.data)
                })
            }
        }, 500);
    }
    
    class Oauth {
        static github() {
            const openWin = window.open(oauthUrl + '/github', 'logInPopup',
                `width=${width},` +
                `height=${height},` +
                `top=${top},` +
                `left=${left},` +
                'status=no,scrollbars=no,resizable=no');
            listenClose(openWin)
        }
    }

    ele.querySelectorAll('.oauth').forEach(element => {
        element.addEventListener('click', function () {
            Oauth[this.getAttribute('data-name')]()
        })
    })
}