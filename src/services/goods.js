import request from './request';

export const getGoodsList = (params)=>{
    return request({
        url: '/goods',
        method: 'get',
        params: params
    })
}

export const deleteGoods = (id)=>{
    return request({
        url: `/goods/${id}`,
        method: 'delete'
    })
}

