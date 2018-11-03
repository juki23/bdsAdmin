import { combineReducers } from 'redux';
import products from './products';
import itemEditing from './itemEditing';
import district from './District/district';
import districtEditing from './District/districtEditing';
import news from './News/news';
import newsEditing from './News/newsEditing';
import project from './Project/project';
import projectEditing from './Project/projectEditing';

const appReducers = combineReducers({
    products,
    itemEditing,
    district,
    districtEditing,
    news,
    newsEditing,
    project,
    projectEditing
});

export default appReducers;