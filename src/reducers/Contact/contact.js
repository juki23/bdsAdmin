import * as Types from '../../constants/ActionTypes';
var initialState = [];

var findIndex = (contact, id) => {
    var result = -1;
    contact.forEach((contac, index) => {
        if (contac.id === id) {
            result = index;
        }
    });
    return result;
}

const contact = (state = initialState, action) => {
    var index = -1;
    var { id, contact } = action;
    switch (action.type) {
        case Types.FETCH_CONTACT:
            state = action.contact;
            return [...state];
        case Types.DELETE_CONTACT:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_CONTACT:
            state.push(action.contact);
            return [...state];
        case Types.UPDATE_CONTACT:
            index = findIndex(state, contact.id);
            state[index] = contact;
            return [...state];
        default: return [...state];
    }
};

export default contact;