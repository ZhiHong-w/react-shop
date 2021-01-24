import request from './request';
//获取权限列表
export const getRightsList = () =>{
    return request({
        url: `rights/list`,
        method: 'get'
    })
}