import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import NewsListPage from './../../../pages/NewsPage/NewsListPage';
import NewsActionPage from './../../../pages/NewsPage/NewsActionPage';

const newsRoutes = [
    {
        path: "/news",
        exact: true,
        main: () => <NewsListPage />
    },
    {
        path: "/news/add",
        exact: false,
        main: ({ history }) => <NewsActionPage history={history} />
    },
    {
        path: "/news/edit/:id",
        exact: false,
        main: ({ match, history }) => <NewsActionPage match={match} history={history} />
    }
];

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
                            <Link to="/news/add" className="btn btn-dark d-none d-lg-block m-l-15"><i className="fa fa-plus-circle" /> Tạo mới</Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {this.showContentNewsRouter(newsRoutes)}
                </div>
            </div>
        );
    };

    showContentNewsRouter = (newsRoutes) => {
        var result = null;
        if (newsRoutes.length > 0) {
            result = newsRoutes.map((route, index) => {
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

export default News;