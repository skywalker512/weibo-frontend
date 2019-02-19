import ajax from '../../utils/ajax'

export default function (status) {
    import( /* webpackIgnore: true */ 'https://static.geetest.com/static/tools/gt.js').then(() => {
        ajax('GET', '/api/geetest/register').then(data => {
            initGeetest({
                gt: data.gt,
                challenge: data.challenge,
                offline: !data.success,
                new_captcha: data.new_captcha,
                product: 'popup',
                width: '260px',
            }, function (captchaObj) {
                captchaObj.appendTo('#geetest')
                captchaObj.onSuccess(function () {
                    const geetestRes = captchaObj.getValidate()
                    ajax('POST', '/api/geetest/validate', geetestRes).then(res => {
                        status.isPass = res.is_pass
                    })
                })
            })
        })
    });
}
