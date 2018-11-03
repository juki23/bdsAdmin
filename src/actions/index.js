import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchProductsRequest = () => {
    return dispatch => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        });
    };
}

export const actFetchProducts = (products) => {
    return {
        type : Types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteProduct(id));
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type : Types.DELETE_PRODUCT,
        id
    }
}

export const actAddProductRequest = (product) => {
    return dispatch => {
        return callApi('products', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data));
        });
    }
}

export const actAddProduct = (product) => {
    return {
        type : Types.ADD_PRODUCT,
        product
    }
}

export const actGetProductRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(actGetProduct(res.data));
        });
    }
}

export const actGetProduct = (product) => {
    return {
        type : Types.EDIT_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(res.data));
        });
    }
}

export const actUpdateProduct = (product) => {
    return {
        type : Types.UPDATE_PRODUCT,
        product
    }
}

// API BDS DISTRICT

export const actFetchDistrictRequest = (product) => {
    return dispatch => {
        return callApi('district', 'GET', null).then(res => {
            dispatch(actFetchDistrict(res.data));
        });
    };
}

export const actFetchDistrict = (district) => {
    return {
        type : Types.FETCH_DISTRICT,
        district
    }
}

export const actAddDistrictRequest = (district) => {
    return dispatch => {
        return callApi('district', 'POST', district).then(res => {
            dispatch(actAddDistrict(res.data));
        });
    }
}

export const actAddDistrict = (district) => {
    return {
        type : Types.ADD_DISTRICT,
        district
    }
}

export const actGetDistrictRequest = (id) => {
    return dispatch => {
        return callApi(`district/${id}`, 'GET', null).then(res => {
            dispatch(actGetDistrict(res.data));
        });
    }
}

export const actGetDistrict = (distr) => {
    return {
        type : Types.EDIT_DISTRICT,
        distr
    }
}

export const actUpdateDistrictRequest = (district) => {
    return dispatch => {
        return callApi(`district/${district.id}`, 'PUT', district).then(res => {
            dispatch(actUpdateDistrict(res.data));
        });
    }
}

export const actUpdateDistrict = (district) => {
    return {
        type : Types.UPDATE_DISTRICT,
        district
    }
}

export const actDeleteDistrictRequest = (id) => {
    return dispatch => {
        return callApi(`district/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteDistrict(id));
        })
    }
}

export const actDeleteDistrict = (id) => {
    return {
        type : Types.DELETE_DISTRICT,
        id
    }
}

// API BDS NEWS

export const actFetchNewsRequest = () => {
    return dispatch => {
        return callApi('news', 'GET', null).then(res => {
            dispatch(actFetchNews(res.data));
        });
    };
}

export const actFetchNews = (news) => {
    return {
        type : Types.FETCH_NEWS,
        news
    }
}

export const actAddNewsRequest = (news) => {
    return dispatch => {
        return callApi('news', 'POST', news).then(res => {
            dispatch(actAddNews(res.data));
        });
    }
}

export const actAddNews = (news) => {
    return {
        type : Types.ADD_NEWS,
        news
    }
}

export const actGetNewsRequest = (id) => {
    return dispatch => {
        return callApi(`news/${id}`, 'GET', null).then(res => {
            dispatch(actGetNews(res.data));
        });
    }
}

export const actGetNews = (ne) => {
    return {
        type : Types.EDIT_NEWS,
        ne
    }
}

export const actUpdateNewsRequest = (news) => {
    return dispatch => {
        return callApi(`news/${news.id}`, 'PUT', news).then(res => {
            dispatch(actUpdateNews(res.data));
        });
    }
}

export const actUpdateNews = (news) => {
    return {
        type : Types.UPDATE_NEWS,
        news
    }
}

export const actDeleteNewsRequest = (id) => {
    return dispatch => {
        return callApi(`news/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteNews(id));
        })
    }
}

export const actDeleteNews = (id) => {
    return {
        type : Types.DELETE_NEWS,
        id
    }
}

// API BDS PROJECT

export const actFetchProjectRequest = () => {
    return dispatch => {
        return callApi('project', 'GET', null).then(res => {
            dispatch(actFetchProject(res.data));
        });
    };
}

export const actFetchProject = (project) => {
    return {
        type : Types.FETCH_PROJECT,
        project
    }
}

export const actAddProjectRequest = (project) => {
    return dispatch => {
        return callApi('project', 'POST', project).then(res => {
            console.log(res.data);
            
            dispatch(actAddProject(res.data));
        });
    }
}

export const actAddProject = (project) => {
    return {
        type : Types.ADD_PROJECT,
        project
    }
}

export const actGetProjectRequest = (id) => {
    return dispatch => {
        return callApi(`project/${id}`, 'GET', null).then(res => {
            dispatch(actGetProject(res.data));
        });
    }
}

export const actGetProject = (proj) => {
    return {
        type : Types.EDIT_PROJECT,
        proj
    }
}

export const actUpdateProjectRequest = (project) => {
    return dispatch => {
        return callApi(`project/${project.id}`, 'PUT', project).then(res => {
            dispatch(actUpdateProject(res.data));
        });
    }
}

export const actUpdateProject = (project) => {
    return {
        type : Types.UPDATE_PROJECT,
        project
    }
}

export const actDeleteProjectRequest = (id) => {
    return dispatch => {
        return callApi(`project/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteProject(id));
        })
    }
}

export const actDeleteProject = (id) => {
    return {
        type : Types.DELETE_PROJECT,
        id
    }
}