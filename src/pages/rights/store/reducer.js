import * as actionType from './constants';

const defaultState = {
    rightsList: []
};

function reducer(state = defaultState,action){
    switch(action.type){
        case actionType.GET_RIGHTS_LIST:
            return { ...state, rightsList: action.rightsList};
        default:
            return state;
    }
}

export default reducer;