/**
 * 登录界面发送请求
 */
import request from './request';

export function getLogin(data){
    return request({
        url: '/login',
        method: 'post',
        data: data
    })
}