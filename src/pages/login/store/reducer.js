import * as actionTypes from './constants';

const defaultState = {
    validUser: {}
}

function reducer(state = defaultState, action){
    switch(action.type) {
        case actionTypes.VALIDATE_USER_INFO:
            return { ...state, validUser: action.validUser };
        default:
            return state;
    }
}

export default reducer;