import * as actionType from './constants';

const defaultState = {
    //菜单名
    menuLists : [],
    //提示信息
    metaMessage: {},
    //slider第一级
    rootSubmenuKeys: []
}

function reducer(state = defaultState,action){
    switch(action.type){
        case actionType.CHANGE_MENU_LISTS:
            return { ...state, menuLists: action.menuLists};
        case actionType.CHANGE_META_MESSAGE:
            return { ...state, metaMessage: action.metaMessage};
        case actionType.CHANGE_SUBMENU_KEYS:
            return { ...state, rootSubmenuKeys: action.rootSubmenuKeys};
        default:
            return state;
    }
}

export default reducer;