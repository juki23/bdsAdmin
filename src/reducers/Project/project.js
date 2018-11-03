import * as Types from '../../constants/ActionTypes';
var initialState = [];

var findIndex = (project, id) => {
    var result = -1;
    project.forEach((proj, index) => {
        if (proj.id === id) {
            result = index;
        }
    });
    return result;
}

const project = (state = initialState, action) => {
    var index = -1;
    var { id, project } = action;
    switch (action.type) {
        case Types.FETCH_PROJECT:
            state = action.project;
            return [...state];
        case Types.DELETE_PROJECT:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_PROJECT:
            state.push(action.project);
            return [...state];
        case Types.UPDATE_PROJECT:
            index = findIndex(state, project.id);
            state[index] = project;
            return [...state];
        default: return [...state];
    }
};

export default project;