/**
 * 使用redux单一数据源统一管理数据
 */

import { createStore,applyMiddleware,compose } from 'redux';
// redux-thunk中间件用来异步请求
import thunk from 'redux-thunk';
//对数据进行更新
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(thunk);

const store = createStore(reducer,composeEnhancers(middleware));

export default store;