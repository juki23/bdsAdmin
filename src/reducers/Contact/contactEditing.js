import * as Types from './../../constants/ActionTypes';

var initialState = {};

const contactEditing = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_CONTACT:
            return action.contac;
        default:
            return state;
    }
}

export default contactEditing;
