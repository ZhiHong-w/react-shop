/**
 * 更新数据，
 * 多个store的结合体
*/

import { combineReducers } from 'redux';

import {reducer as loginReducer} from '../pages/login/store';
import {reducer as homeReducer} from '../pages/home/store';
import {reducer as userReducer} from '../pages/users/store';
import {reducer as rightsReducer} from '../pages/rights/store';
import {reducer as reportReducer} from '../pages/reports/store';
import {reducer as goodsReducer} from '../pages/goods/store';
import {reducer as ordersReducer} from '../pages/orders/store';
import {reducer as categoriesReducer} from '../pages/categories/store';

const reducer = combineReducers({
    login: loginReducer,
    home: homeReducer,
    user: userReducer,
    rights: rightsReducer,
    report: reportReducer,
    goods: goodsReducer,
    orders: ordersReducer,
    categories: categoriesReducer
});

export default reducer;