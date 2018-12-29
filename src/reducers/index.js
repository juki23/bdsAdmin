import { combineReducers } from 'redux';
import products from './products';
import itemEditing from './itemEditing';
import district from './District/district';
import districtEditing from './District/districtEditing';
import news from './News/news';
import newsEditing from './News/newsEditing';
import project from './Project/project';
import projectEditing from './Project/projectEditing';
import contact from './Contact/contact';
import contactEditing from './Contact/contactEditing';
import user from './User/user';
import about from './About/about';

const appReducers = combineReducers({
    products,
    itemEditing,
    district,
    districtEditing,
    news,
    newsEditing,
    project,
    projectEditing,
    user,
    about,
    contact,
    contactEditing
});

export default appReducers;