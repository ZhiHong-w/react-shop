import * as actionTypes from './constants';

import { getLogin } from '../../../services/login'

//验证用户的信息
const ValidUserAction = (res) => ({
    type: actionTypes.VALIDATE_USER_INFO,
    validUser: res.data
})

export const ValidUserDispatch = (data) => {
    return async dispatch => {
        const res = await getLogin(data);
        // console.log(res);
        dispatch(ValidUserAction(res))
    }
}