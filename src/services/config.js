const devBaseUrl = 'http://127.0.0.1:8888/api/private/v1';
const proBaseUrl = 'http://127.0.0.1:8888/api/private/v1';

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseUrl:proBaseUrl;

export const TIME_OUT = 5000;

//'http://timemeetyou.com:8889/api/private/v1'