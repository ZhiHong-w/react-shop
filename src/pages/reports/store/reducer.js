import * as actionType from './constants';

const defaultState = {
    lineEcharts: {}
}

function reducer(state = defaultState,action){
    switch(action.type){
        case actionType.GET_LINE_ECHARTS_DATA:
            return {...state, lineEcharts: action.lineEcharts};
        default:
            return state;
    }
}

export default reducer;