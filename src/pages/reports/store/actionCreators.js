import * as actionType from './constants';

import { getLineEcharts } from '../../../services/report';

const getLineEchartsAction = (lineEcharts) => ({
    type: actionType.GET_LINE_ECHARTS_DATA,
    lineEcharts
})

export const getLineEchartsDispatch = () => {
    return async dispatch => {
        const {data: res} = await getLineEcharts();
        console.log(res);
        dispatch(getLineEchartsAction(res.data));
    }
}