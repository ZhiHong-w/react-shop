import request from './request';

//获取分类列表
export const getCategoryList = (queryInfo)=>{
    return request({
        url: '/categories',
        method: 'get',
        params: queryInfo
    })
}

export const getParentCateList = ()=>{
    return request({
        url: '/categories',
        method: 'get',
        params: {
            type: 2
        }
    })
}

export const addCate = (addCateForm)=>{
    return request({
        url: '/categories',
        method: 'post',
        data: addCateForm
    })
}