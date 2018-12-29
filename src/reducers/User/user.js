import * as Types from '../../constants/ActionTypes';
var initialState = [];

var findIndex = (user, id) => {
    var result = -1;
    user.forEach((us, index) => {
        if (us.id === id) {
            result = index;
        }
    });
    return result;
}

const user = (state = initialState, action) => {
    var index = -1;
    var { id, user } = action;
    switch (action.type) {
        case Types.FETCH_USER:
            state = action.user;
            return [...state];
        case Types.DELETE_USER:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_USER:
            state.push(action.user);
            return [...state];
        case Types.UPDATE_USER:
            index = findIndex(state, user.id);
            state[index] = user;
            return [...state];
        default: return [...state];
    }
};

export default user;