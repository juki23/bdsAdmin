import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import NewsList from './NewsList';
import NewsEdit from './NewsEdit';

class News extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Thông tin</h4>
                    </div>
                    <div className="col-md-7 align-self-center text-right">
                        <div className="d-flex justify-content-end align-items-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/project">Trang chủ</Link></li>
                                <li className="breadcrumb-item active"><Link to="/news">Thông tin</Link></li>
                            </ol>
                            <Link to="/news/edit" className="btn btn-dark d-none d-lg-block m-l-15"><i className="fa fa-plus-circle" /> Tạo mới</Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Route path="/news" exact={true} component={NewsList} />
                    <Route path="/news/edit" exact={false} component={NewsEdit} />
                </div>
            </div>
        );
    };
}

export default News;