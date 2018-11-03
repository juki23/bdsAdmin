import * as Types from '../../constants/ActionTypes';
var initialState = [];

var findIndex = (district, id) => {
    var result = -1;
    district.forEach((distr, index) => {
        if (distr.id === id) {
            result = index;
        }
    });
    return result;
}

const district = (state = initialState, action) => {
    var index = -1;
    var { id, district } = action;
    switch (action.type) {
        case Types.FETCH_DISTRICT:
            state = action.district;
            return [...state];
        case Types.DELETE_DISTRICT:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_DISTRICT:
            state.push(action.district);
            return [...state];
        case Types.UPDATE_DISTRICT:
            index = findIndex(state, district.id);
            state[index] = district;
            return [...state];
        default: return [...state];
    }
};

export default district;