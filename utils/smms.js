export default async function smms(fileBtn) {
    const fd = new FormData()
    fd.append('smfile', fileBtn.files[0])
    const response = await fetch('https://sm.ms/api/upload', { method: 'POST', /*headers: { 'Content-Type': 'multipart/form-data'},*/ body: fd });
    const result = await response.json(); // 同样 awit 返回也是 then 中的参数
    return result
}