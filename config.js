export const config = {
    apiUrl: process.env.FE_URL,
    passwordPattern: /^.*(?=.{4,16})(?=.*\d)(?=.*[A-Z]{2,})(?=.*[a-z]{2,}).*$/,
    emailPattern: /^.*(?=.{1,30})(?=.*[@]).*$/,
    namePattern: /^[\w_-]{6,16}$/,
    articlePattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]|[\u2190-\u21FF]|[\u2600-\u26FF]|[\u2700-\u27BF]|[\u3000-\u303F]|[\u1F300-\u1F64F]|[\u1F680-\u1F6FF]{10,140}$/,
    profilePattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]{5,14}$/,
}