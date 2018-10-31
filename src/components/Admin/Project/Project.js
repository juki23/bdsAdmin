import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ProjectList from './ProjectList';
import ProjectEdit from './ProjectEdit';

class Project extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Dự Án</h4>
                    </div>
                    <div className="col-md-7 align-self-center text-right">
                        <div className="d-flex justify-content-end align-items-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/project">Trang chủ</Link></li>
                                <li className="breadcrumb-item active"><Link to="/project">Dự Án</Link></li>
                            </ol>
                            <Link to="/project/edit" className="btn btn-dark d-none d-lg-block m-l-15"><i className="fa fa-plus-circle" /> Tạo mới</Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Route path="/project" exact={true} component={ProjectList}/>
                    <Route path="/project/edit" exact={false} component={ProjectEdit}/>
                </div>
            </div>
        );
    }
}

export default Project;



