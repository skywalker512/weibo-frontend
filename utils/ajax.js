import {config} from '../config';

export default async function ajax(type, url, data) {
    const response = await fetch(config.apiUrl+url, { method: type, body: JSON.stringify(data) }); // awit 返回的就是 Promise.resolve() 也就是 .then 传入的参数
    const result = await response.json(); // 同样 awit 返回也是 then 中的参数
    return result.data;
}