/**
 * users的redux
 */
import * as actionType from './constants';

const defaultState = {
    userList: [],
    total: 0,
    queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 2
    },
    addUserModalVisable: false,
    roleList: []
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.CHANGE_USER_LIST:
            return { ...state, userList: action.userList };
        case actionType.CHANGE_TOTAL:
            return { ...state, total: action.total };
        case actionType.CHANGE_QUERY_INFO:
            return { ...state, queryInfo: action.queryInfo};
        case actionType.CHANGE_ADD_USER_MODAL_VISABLE:
            return { ...state, addUserModalVisable: action.addUserModalVisable};
        case actionType.GET_ROLE_LIST:
            return { ...state, roleList: action.roleList};
        default:
            return state;
    }
}

export default reducer;