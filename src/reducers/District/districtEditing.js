import * as Types from './../../constants/ActionTypes';

var initialState = {};

const districtEditing = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_DISTRICT:
            return action.distr;
        default:
            return state;
    }
}

export default districtEditing;
