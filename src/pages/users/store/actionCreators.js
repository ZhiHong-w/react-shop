import * as actionType from './constants';

import { getUserList,getRoleList } from '../../../services/user';
import { insertUserList } from '../../../utils/userList';

const changeUserListAction = (userList)=>({
    type: actionType.CHANGE_USER_LIST,
    userList
})

const changeTotalAction = (total)=>({
    type: actionType.CHANGE_TOTAL,
    total
})
//获取userList total
export const changeUsersDispatch = (params)=>{
    return dispatch => {
        getUserList(params).then(res=>{
            //console.log(res);
            const data = res.data;
            if(data.meta.status === 200){

                const userList = insertUserList(data.data.users);
                
                dispatch(changeUserListAction(userList));
                dispatch(changeTotalAction(data.data.total));
            }  
        })
    }
}

export const changeQueryInfoAction = (queryInfo) => ({
    type: actionType.CHANGE_QUERY_INFO,
    queryInfo
})

//改变addUserModalVisable
export const changeAddUserModalVisableAction = (isVisable) => ({
    type: actionType.CHANGE_ADD_USER_MODAL_VISABLE,
    addUserModalVisable: isVisable
})

const getRoleListAction = (roleList) => ({
    type: actionType.GET_ROLE_LIST,
    roleList
})

export const getRoleListDispatch = () =>{
    return async dispatch => {
        const {data: res} = await getRoleList();
        dispatch(getRoleListAction(res.data));
    }
}

