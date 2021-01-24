import request from './request';
//获取图表数据
export const getLineEcharts = ()=>{
    return request({
        url: '/reports/type/1',
        method: 'get'
    })
}