import { config } from '../config';
import tipsApi from '../api/indexBody/tips'
import tipsController from '../controllers/indexBody/tips'

const pustTips = res => {
    return new Promise((reslove, reject) => {
        if(res.msg){
            let status = 'success'
            if (res.code === 200) status = 'success'
            if (res.code === 400) status = 'error'
            tipsApi(res.msg, status)
            tipsController()
        }
        reslove(res)
    });
};

export default async function ajax(type, url, data) {
    let params;
    if (data) {
        params = Object.keys(data).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
        }).join('&');
    }
    const response = await fetch(config.apiUrl + url, { method: type, credentials: 'include', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: params }); // awit 返回的就是 Promise.resolve() 也就是 .then 传入的参数
    const result = await response.json().then(pustTips); // 同样 awit 返回也是 then 中的参数
    return result
}