import { setting } from './setting';

// fetch(url + dataSend, {
//     method: type,
// }).then(function (response) {
//     response.json().then(function (result) {
//         success(result);
//         console.log(this);
//     });
export async function ajax(type, url, data) {
    const response = await fetch(setting.api_url+url, { method: type, body: JSON.stringify(data) }); // awit 返回的就是 Promise.resolve() 也就是 .then 传入的参数
    const result = await response.json(); // 同样 awit 返回也是 then 中的参数
    return result.data;
}