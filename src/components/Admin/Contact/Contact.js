import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ContactListPage from './../../../pages/ContactPage/ContactListPage';
import ContactActionPage from './../../../pages/ContactPage/ContactActionPage';

const contactRoutes = [
    {
        path: "/contact",
        exact: true,
        main: () => <ContactListPage />
    },
    {
        path: "/contact/add",
        exact: false,
        main: ({ history }) => <ContactActionPage history={history} />
    },
    {
        path: "/contact/edit/:id",
        exact: false,
        main: ({ match, history }) => <ContactActionPage match={match} history={history} />
    }
];

class Contact extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Liên hệ</h4>
                    </div>
                    <div className="col-md-7 align-self-center text-right">
                        <div className="d-flex justify-content-end align-items-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                                <li className="breadcrumb-item active">Liên hệ</li>
                            </ol>
                            <Link to="/contact/add" className="btn btn-dark d-none d-lg-block m-l-15"><i className="fa fa-plus-circle" /> Tạo mới</Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {this.showContentContactRouter(contactRoutes)}
                </div>
            </div>
        );
    }

    showContentContactRouter = (contactRoutes) => {
        var result = null;
        if (contactRoutes.length > 0) {
            result = contactRoutes.map((route, index) => {
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

export default Contact;