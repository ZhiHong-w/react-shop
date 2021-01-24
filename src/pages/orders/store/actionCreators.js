import * as actionType from './constants';

import { getOrdersList } from '../../../services/orders';
import { insertOrdersList } from '../../../utils/ordersList'

//获取货物信息
const getOrdersListAction = (ordersList) => ({
    type: actionType.GET_ORDERS_LIST,
    ordersList
})
//获取货物的数量
const getOrdersCountAction = (total) => ({
    type: actionType.GET_ORDERS_COUNT,
    total
})
//发送请求获取数据redux-thunk
export const getOrdersDispatch = (params) => {
    return async dispatch => {
        const { data: res } = await getOrdersList(params);
        console.log(res);
        if (res && res.data && res.data.total) {
            const goods = insertOrdersList(res.data.goods);
            dispatch(getOrdersListAction(goods));
            dispatch(getOrdersCountAction(res.data.total));
        }

    }
}


export const changeQueryInfoAction = (queryInfo) => ({
    type: actionType.CHANGE_QUERY_INFO,
    queryInfo
})