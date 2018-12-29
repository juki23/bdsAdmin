import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';
import { toast } from 'react-toastify';

// API BDS DISTRICT
export const actFetchDistrictRequest = () => {
    return dispatch => {
        return callApi('getAllDistricts', 'GET', null).then(res => {
            dispatch(actFetchDistrict(res.data));
        });
    };
}

export const actFetchDistrict = (district) => {
    return {
        type: Types.FETCH_DISTRICT,
        district
    }
}

export const actAddDistrictRequest = (district) => {
    return dispatch => {
        return callApi('insertDistrict', 'POST', district).then(res => {
            // dispatch(actAddDistrict(res.data));
            dispatch(actFetchDistrictRequest());
            toast.success("Thêm quận ,huyện thành công");
        });
    }
}

export const actAddDistrict = (district) => {
    return {
        type: Types.ADD_DISTRICT,
        district
    }
}

export const actGetDistrictRequest = (id) => {
    return dispatch => {
        return callApi(`getDistrict/${id}`, 'GET', null).then(res => {
            dispatch(actGetDistrict(res.data[0]));
        });
    }
}

export const actGetDistrict = (distr) => {
    return {
        type: Types.EDIT_DISTRICT,
        distr
    }
}

export const actUpdateDistrictRequest = (district) => {
    return dispatch => {
        return callApi('updateDistrict', 'PUT', district).then(res => {
            // dispatch(actUpdateDistrict(res.data));
            dispatch(actFetchDistrictRequest());
            toast.success("Cập nhật quận ,huyện thành công");
        });
    }
}

export const actUpdateDistrict = (district) => {
    return {
        type: Types.UPDATE_DISTRICT,
        district
    }
}

export const actDeleteDistrictRequest = (id) => {
    return dispatch => {
        return callApi(`deleteDistrict/${id}`, 'DELETE', null).then(res => {
            if (res.data && res.data.message === "success") {
                toast.success("Xóa quận ,huyện thành công");
            } else {
                toast.error("Xóa quận ,huyện thất bại");
            };
            dispatch(actDeleteDistrict(id));
        })
    }
}

export const actDeleteDistrict = (id) => {
    return {
        type: Types.DELETE_DISTRICT,
        id
    }
}

// API BDS NEWS

export const actFetchNewsRequest = () => {
    return dispatch => {
        return callApi('getAllNews', 'GET', null).then(res => {
            dispatch(actFetchNews(res.data));
        });
    };
}

export const actFetchNewsPageRequest = (paging) => {
    return dispatch => {
        return callApi('getAllNewsPages', 'POST', paging).then(res => {
            dispatch(actFetchNews(res.data));
        });
    };
}

export const actFetchNews = (news) => {
    return {
        type: Types.FETCH_NEWS,
        news
    }
}

export const actAddNewsRequest = (news) => {
    return dispatch => {
        return callApi('insertNews', 'POST', news).then(res => {
            dispatch(actAddNews(res.data));
            toast.success("Thêm tin tức thành công");
        });
    }
}

export const actAddNews = (news) => {
    return {
        type: Types.ADD_NEWS,
        news
    }
}

export const actGetNewsRequest = (id) => {
    return dispatch => {
        return callApi(`getNews/${id}`, 'GET', null).then(res => {
            dispatch(actGetNews(res.data[0]));
        });
    }
}

export const actGetNews = (ne) => {
    return {
        type: Types.EDIT_NEWS,
        ne
    }
}

export const actUpdateNewsRequest = (news) => {
    return dispatch => {
        return callApi('updateNews', 'PUT', news).then(res => {
            dispatch(actUpdateNews(res.data));
            toast.success("Cập nhật tin tức thành công");
        });
    }
}

export const actUpdateNews = (news) => {
    return {
        type: Types.UPDATE_NEWS,
        news
    }
}

export const actDeleteNewsRequest = (id) => {
    return dispatch => {
        return callApi(`deleteNews/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteNews(id));
            toast.success("Xóa tin tức thành công");
        })
    }
}

export const actDeleteNews = (id) => {
    return {
        type: Types.DELETE_NEWS,
        id
    }
}

// API BDS PROJECT

export const actFetchProjectRequest = () => {
    return dispatch => {
        return callApi('getAllProjects', 'GET', null).then(res => {
            dispatch(actFetchProject(res.data));
        });
    };
}

export const actFetchProjectPageRequest = (paging) => {
    return dispatch => {
        return callApi('getAllProjectPages', 'POST', paging).then(res => {
            dispatch(actFetchProject(res.data));
        });
    };
}

export const actFetchProject = (project) => {
    return {
        type: Types.FETCH_PROJECT,
        project
    }
}

export const actAddProjectRequest = (project) => {
    return dispatch => {
        return callApi('insertProject', 'POST', project).then(res => {
            dispatch(actAddProject(res.data));
            toast.success("Thêm dự án thành công");
        });
    }
}

export const actAddProject = (project) => {
    return {
        type: Types.ADD_PROJECT,
        project
    }
}

export const actGetProjectRequest = (id) => {
    return dispatch => {
        return callApi(`getProject/${id}`, 'GET', null).then(res => {
            dispatch(actGetProject(res.data[0]));
        });
    }
}

export const actGetProject = (proj) => {
    return {
        type: Types.EDIT_PROJECT,
        proj
    }
}

export const actUpdateProjectRequest = (project) => {
    return dispatch => {
        return callApi('updateProject', 'PUT', project).then(res => {
            dispatch(actUpdateProject(res.data));
            toast.success("Cập nhật dự án thành công");
        });
    }
}

export const actUpdateProject = (project) => {
    return {
        type: Types.UPDATE_PROJECT,
        project
    }
}

export const actDeleteProjectRequest = (id) => {
    return dispatch => {
        return callApi(`deleteProject/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProject(id));
            toast.success("Xóa dự án thành công");
        })
    }
}

export const actDeleteProject = (id) => {
    return {
        type: Types.DELETE_PROJECT,
        id
    }
}

// API BDS CONTACT

export const actFetchContactRequest = () => {
    return dispatch => {
        return callApi('getAllContacts', 'GET', null).then(res => {
            dispatch(actFetchContact(res.data));
        });
    };
}

export const actFetchContactPageRequest = (dataPage) => {
    return dispatch => {
        return callApi('getAllContactPages', 'POST', dataPage).then(res => {
            dispatch(actFetchContact(res.data));
        });
    };
}

export const actFetchContact = (contact) => {
    return {
        type: Types.FETCH_CONTACT,
        contact
    }
}

export const actAddContactRequest = (contact) => {
    return dispatch => {
        return callApi('insertContact', 'POST', contact).then(res => {
            dispatch(actAddContact(res.data));
            toast.success("Thêm liên hệ thành công");
        });
    }
}

export const actAddContact = (contact) => {
    return {
        type: Types.ADD_CONTACT,
        contact
    }
}

export const actGetContactRequest = (id) => {
    return dispatch => {
        return callApi(`getContact/${id}`, 'GET', null).then(res => {
            dispatch(actGetContact(res.data[0]));
        });
    }
}

export const actGetContact = (contac) => {
    return {
        type: Types.EDIT_CONTACT,
        contac
    }
}

export const actUpdateContactRequest = (contact) => {
    return dispatch => {
        return callApi('updateContact', 'PUT', contact).then(res => {
            dispatch(actUpdateContact(res.data));
            toast.success("Cập nhật liên hệ thành công");
        });
    }
}

export const actUpdateContact = (contact) => {
    return {
        type: Types.UPDATE_CONTACT,
        contact
    }
}

export const actDeleteContactRequest = (id) => {
    return dispatch => {
        return callApi(`deleteContact/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteContact(id));
            toast.success("Xóa liên hệ thành công");
        })
    }
}

export const actDeleteContact = (id) => {
    return {
        type: Types.DELETE_CONTACT,
        id
    }
}

// API BDS ABOUT

export const actFetchAboutRequest = () => {
    return dispatch => {
        return callApi('getAllAbouts', 'GET', null).then(res => {
            dispatch(actFetchAbout(res.data));
        });
    };
}

export const actFetchAbout = (about) => {
    return {
        type: Types.FETCH_ABOUT,
        about
    }
}

export const actAddAboutRequest = (about) => {
    return dispatch => {
        return callApi('insertAbout', 'POST', about).then(res => {
            dispatch(actAddAbout(res.data));
            toast.success("Thêm giới thiệu thành công");
        });
    }
}

export const actAddAbout = (about) => {
    return {
        type: Types.ADD_ABOUT,
        about
    }
}

export const actUpdateAboutRequest = (about) => {
    return dispatch => {
        return callApi('updateAbout', 'PUT', about).then(res => {
            dispatch(actUpdateAbout(res.data));
            toast.success("Cập nhật giới thiệu thành công");
        });
    }
}

export const actUpdateAbout = (about) => {
    return {
        type: Types.UPDATE_ABOUT,
        about
    }
}

// API BDS USER

export const actFetchUserRequest = () => {
    return dispatch => {
        return callApi('getAllUsers', 'GET', null).then(res => {
            dispatch(actFetchUser(res.data));
        });
    };
}

export const actFetchUser = (user) => {
    return {
        type: Types.FETCH_USER,
        user
    }
}

export const actAddUserRequest = (user) => {
    return dispatch => {
        return callApi('insertUser', 'POST', user).then(res => {
            dispatch(actAddUser(res.data));
            toast.success("Thêm người dùng thành công");
        });
    }
}

export const actAddUser = (user) => {
    return {
        type: Types.ADD_USER,
        user
    }
}

export const actUpdateUserRequest = (user) => {
    return dispatch => {
        return callApi('updateUser', 'PUT', user).then(res => {
            dispatch(actUpdateUser(res.data));
            toast.success("Cập nhật người dùng thành công");
        });
    }
}

export const actUpdateUser = (user) => {
    return {
        type: Types.UPDATE_USER,
        user
    }
}