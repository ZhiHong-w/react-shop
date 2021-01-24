import * as actionType from './constants';

const defaultState = {
    cateList: [],
    total: 0,
    queryInfo: {
        type: 3,
        pagenum: 1,
        pagesize: 5
    },
    addCateVisable: false,
    parentCateList: [],
}

function reducer(state = defaultState,action){
    switch(action.type){
        case actionType.GET_CATEGORIES_LIST:
            return {...state,cateList: action.cateList};
        case actionType.GET_TOTAL_CATEGORIES:
            return {...state,total: action.total};
        case actionType.CHANGE_QUERY_INFO:
            return {...state,queryInfo: action.queryInfo};
        case actionType.ADD_CATE_VISABLE:
            return {...state,addCateVisable: action.addCateVisable};
        case actionType.GET_PARENT_CATE_LIST:
            return {...state,parentCateList: action.parentCateList};
        default:
            return state;
    }
}

export default reducer;