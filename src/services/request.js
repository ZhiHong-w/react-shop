/**
 * 创建axios请求
 */
import axios from 'axios';

import { BASE_URL,TIME_OUT} from './config';

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT
});

instance.interceptors.request.use( config => {
    
    config.headers.Authorization = window.sessionStorage.getItem('token');
    return config;
})

instance.interceptors.response.use( config => {
    return config;
})

export default instance;