import * as actionType from './constants';

const defaultState = {
    goodsList: [],
    total: 0,
    queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 10
    }
}

function reducer(state = defaultState, action){
    switch(action.type){
        case actionType.GET_GOODS_LIST:
            return {...state,goodsList: action.goodsList};
        case actionType.GET_GOODS_COUNT:
            return {...state,total: action.total};
        case actionType.CHANGE_QUERY_INFO:
            return {...state,queryInfo: action.queryInfo};
        default:
            return state;
    }
}

export default reducer;