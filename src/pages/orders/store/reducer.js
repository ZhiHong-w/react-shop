import * as actionType from './constants';

const defaultState = {
    ordersList: [],
    total: 0,
    queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 5
    }
}

function reducer(state = defaultState, action){
    switch(action.type){
        case actionType.GET_ORDERS_LIST:
            return {...state,ordersList: action.ordersList};
        case actionType.GET_ORDERS_COUNT:
            return {...state,total: action.total};
        case actionType.CHANGE_QUERY_INFO:
            return {...state,queryInfo: action.queryInfo};
        default:
            return state;
    }
}

export default reducer;