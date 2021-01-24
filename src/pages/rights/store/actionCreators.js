import * as actionType from './constants';
import { getRightsList } from '../../../services/rights';
import { insertRightsList } from '../../../utils/rightsList';

const getRightsListAction = (rightsList) => ({
    type: actionType.GET_RIGHTS_LIST,
    rightsList
})

export const getRightsListDispatch = () => {
    return async dispatch => {
        const {data: res} = await getRightsList();
        console.log(res);
        const rightsList = insertRightsList(res.data);
        dispatch(getRightsListAction(rightsList));
    }
}