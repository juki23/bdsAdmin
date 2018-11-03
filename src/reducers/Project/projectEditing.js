import * as Types from './../../constants/ActionTypes';

var initialState = {};

const projectEditing = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_PROJECT:
            return action.proj;
        default:
            return state;
    }
}

export default projectEditing;
