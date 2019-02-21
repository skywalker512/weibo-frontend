import ajax from './ajax'
import tipsApi from '../api/indexBody/tips'
import tipsController from '../controllers/indexBody/tips'


export default async function upyun(fileBtn, path) {
    let res
    await ajax('GET', `/api/upyun/sign?path=${path}`).then(result=>{
        res = result.data
    })
    const fd = new FormData()
    fd.append('policy', res.headSign.policy)
    fd.append('authorization', res.headSign.authorization);
    fd.append('file', fileBtn.files[0])
    const response = await fetch(`https://v0.api.upyun.com/${res.bucket}`, { method: 'POST', /*headers: { 'Content-Type': 'multipart/form-data'},*/ body: fd });
    const put = res1 => {
        return new Promise((reslove, reject) => {
            if(res1.code){
                if (res1.code === 200) {
                    tipsApi('上传成功', 'success')
                } else {
                    tipsApi('上传失败', 'error')
                }
                tipsController()
            }
            res1.fullurl = res.url + res1.url
            reslove(res1)
        });
    };
    
    const result = await response.json().then(put); // 同样 awit 返回也是 then 中的参数
    return result
}