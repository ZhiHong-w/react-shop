import * as actionType from './constants';

import { getMenuData } from '../../../services/home';

//获取菜单名
const changeMenuListsAction = (menuLists) => ({
    type: actionType.CHANGE_MENU_LISTS,
    menuLists
})
//获取额外的提示信息
const changeMetaMessageAction = (metaMessage) => ({
    type: actionType.CHANGE_META_MESSAGE,
    metaMessage
})

export const changeMenuListsDispatch = () => {
    return async dispatch => {
        const { data: res } = await getMenuData();
        //console.log(res);
        dispatch(changeMenuListsAction(res.data));
        dispatch(changeMetaMessageAction(res.meta));
    }
}

export const changeSubMenuKeysAction = (rootSubmenuKeys) => ({
  type: actionType.CHANGE_SUBMENU_KEYS,
  rootSubmenuKeys
})