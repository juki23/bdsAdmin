import * as Types from './../../constants/ActionTypes';

var initialState = {};

const newsEditing = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_NEWS:
            return action.ne;
        default:
            return state;
    }
}

export default newsEditing;
