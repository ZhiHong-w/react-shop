import * as actionType from './constants';

import { getGoodsList } from '../../../services/goods';
import { insertGoodsList } from '../../../utils/goodsList'

//获取货物信息
const getGoodsListAction = (goodsList) => ({
    type: actionType.GET_GOODS_LIST,
    goodsList
})
//获取货物的数量
const getGoodsCountAction = (total) => ({
    type: actionType.GET_GOODS_COUNT,
    total
})
//发送请求获取数据redux-thunk
export const getGoodsDispatch = (params) => {
    return async dispatch => {
        const { data: res } = await getGoodsList(params);
        console.log(res);
        if (res && res.data) {
            const goods = insertGoodsList(res.data.goods);
            dispatch(getGoodsListAction(goods));
            dispatch(getGoodsCountAction(res.data.total));
        }

    }
}


export const changeQueryInfoAction = (queryInfo) => ({
    type: actionType.CHANGE_QUERY_INFO,
    queryInfo
})