export const config = {
    apiUrl: 'http://redrock.test:3000',
    passwordPattern: /^.*(?=.{4,16})(?=.*\d)(?=.*[A-Z]{2,})(?=.*[a-z]{2,}).*$/,
    emailPattern: /^.*(?=.{1,30})(?=.*[@]).*$/,
    namePattern: /^[\w_-]{6,16}$/,
    articlePattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]{10,140}$/
}