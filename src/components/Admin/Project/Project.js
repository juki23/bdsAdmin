import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ProjectListPage from './../../../pages/ProjectPage/ProjectListPage';
import ProjectActionPage from './../../../pages/ProjectPage/ProjectActionPage';

const projectRoutes = [
    {
        path: "/",
        exact: true,
        main: () => <ProjectListPage />
    },
    {
        path: "/project",
        exact: true,
        main: () => <ProjectListPage />
    },
    {
        path: "/project/add",
        exact: false,
        main: ({ history }) => <ProjectActionPage history={history} />
    },
    {
        path: "/project/edit/:id",
        exact: false,
        main: ({ match, history }) => <ProjectActionPage match={match} history={history} />
    }
];

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
                            <Link to="/project/add" className="btn btn-dark d-none d-lg-block m-l-15"><i className="fa fa-plus-circle" /> Tạo mới</Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {this.showContentProjectRouter(projectRoutes)}
                </div>
            </div>
        );
    };

    showContentProjectRouter = (projectRoutes) => {
        var result = null;
        if (projectRoutes.length > 0) {
            result = projectRoutes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }
}

export default Project;



