import { config } from '../config';

export default async function ajax(type, url, data) {
    let params;
    if (data) {
        params = Object.keys(data).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
        }).join('&');
    }
    const response = await fetch(config.apiUrl + url, { method: type, credentials: 'include', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: params }); // awit 返回的就是 Promise.resolve() 也就是 .then 传入的参数
    const result = await response.json(); // 同样 awit 返回也是 then 中的参数
    return result
}