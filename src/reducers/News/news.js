import * as Types from '../../constants/ActionTypes';
var initialState = [];

var findIndex = (news, id) => {
    var result = -1;
    news.forEach((ne, index) => {
        if (ne.id === id) {
            result = index;
        }
    });
    return result;
}

const news = (state = initialState, action) => {
    var index = -1;
    var { id, news } = action;
    switch (action.type) {
        case Types.FETCH_NEWS:
            state = action.news;
            return [...state];
        case Types.DELETE_NEWS:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_NEWS:
            state.push(action.news);
            return [...state];
        case Types.UPDATE_NEWS:
            index = findIndex(state, news.id);
            state[index] = news;
            return [...state];
        default: return [...state];
    }
};

export default news;