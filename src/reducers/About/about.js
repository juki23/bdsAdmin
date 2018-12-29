import * as Types from '../../constants/ActionTypes';
var initialState = [];

var findIndex = (about, id) => {
    var result = -1;
    about.forEach((ab, index) => {
        if (ab.id === id) {
            result = index;
        }
    });
    return result;
}

const about = (state = initialState, action) => {
    var index = -1;
    var { id, about } = action;
    switch (action.type) {
        case Types.FETCH_ABOUT:
            state = action.about;
            return [...state];
        case Types.DELETE_ABOUT:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_ABOUT:
            state.push(action.about);
            return [...state];
        case Types.UPDATE_ABOUT:
            index = findIndex(state, about.id);
            state[index] = about;
            return [...state];
        default: return [...state];
    }
};

export default about;