import request from './request'
//获取订单裂帛安排
export const getOrdersList = (params) =>{
    return request({
        url: '/orders',
        method: 'get',
        params: params
    })
}