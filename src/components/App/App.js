import React, { Component } from 'react';
import routes from './routes';
import { Switch, Route, Link, HashRouter } from 'react-router-dom';
// import $ from 'jquery';
// window.$ = $;

import logoIcon from './assets/images/logo-icon.png';
import logoLightIcon from './assets/images/logo-light-icon.png';
import logoText from './assets/images/logo-text.png';
import logoLightText from './assets/images/logo-light-text.png';
import user2 from './assets/images/users/2.jpg';

import './assets/css/style.min.css';
import './assets/node_modules/morrisjs/morris.css';
import './assets/node_modules/c3-master/c3.min.css';
import './assets/css/pages/dashboard1.css';

import './assets/js/waves.js';
// import './assets/js/sidebarmenu.js';
import './assets/js/perfect-scrollbar.jquery.min.js';
import './assets/js/custom.min.js';
// import './assets/node_modules/morrisjs/morris.min.js';
// import './assets/node_modules/jquery-sparkline/jquery.sparkline.min.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './assets/js/jquery.webticker.min.js';
// import './assets/js/fastclick.js';
// import './assets/js/web-ticker.js';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active' : '';
            return (
                <li className={active}>
                    <Link replace className={`waves-arrow waves-effect waves-dark ${active}`} to={to} aria-expanded="false"><i className="icon-speedometer" />
                        <span className="hide-menu">{label}</span></Link>
                </li>
            )
        }} />
    )
}

class App extends Component {
    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
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


    render() {
        return (
            <HashRouter className="fixed-layout skin-megna-dark">
                {/* <ToastContainer /> */}
                {/* <div className="preloader">
                    <div className="loader">
                        <div className="loader__figure" />
                        <p className="loader__label">admin</p>
                    </div>
                </div> */}
                <div id="main-wrapper">
                    <ToastContainer />
                    <header className="topbar">
                        <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                            <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                                <div className="navbar-header">
                                    <a className="navbar-brand" href="index.html">
                                        <b>
                                            <img src={logoIcon} alt="homepage" className="dark-logo" />
                                            <img src={logoLightIcon} alt="homepage" className="light-logo" />
                                        </b>
                                        <span>
                                            <img src={logoText} alt="homepage" className="dark-logo" />
                                            <img src={logoLightText} className="light-logo" alt="homepage" />
                                        </span>
                                    </a>
                                </div>
                                <div className="navbar-collapse">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item"> <a className="nav-link nav-toggler d-block d-md-none waves-effect waves-dark" href="javascript:void(0)"><i className="ti-menu" /></a> </li>
                                        <li className="nav-item"> <a className="nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark" href="javascript:void(0)"><i className="icon-menu" /></a> </li>
                                        <li className="nav-item">
                                            <form className="app-search d-none d-md-block d-lg-block">
                                                <input type="text" className="form-control" placeholder="Tìm kiếm và enter" />
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </nav>
                    </header>
                    <aside className="left-sidebar">
                        <div className="scroll-sidebar">
                            <div className="user-profile">
                                <div className="user-pro-body">
                                    <div><img src={user2} alt="user-img" className="img-circle" /></div>
                                    <div className="dropdown">
                                        <a href="javascript:void(0)" className="dropdown-toggle u-dropdown link hide-menu" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Tên người dùng <span className="caret" /></a>
                                        <div className="dropdown-menu animated flipInY">
                                            <a href="javascript:void(0)" className="dropdown-item"><i className="ti-settings" /> Cài đặt</a>
                                            <div className="dropdown-divider" />
                                            <a href="pages-login.html" className="dropdown-item"><i className="fa fa-power-off" /> Thoát</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav className="sidebar-nav">
                                <ul id="sidebarnav">
                                    <MenuLink to="/project" label="Dự Án" activeOnlyWhenExact={false} />
                                    <MenuLink to="/user" label="Tài Khoản" activeOnlyWhenExact={false} />
                                    <MenuLink to="/news" label="Tin Tức" activeOnlyWhenExact={false} />
                                    <MenuLink to="/district" label="Quận, Huyện" activeOnlyWhenExact={false} />
                                    <MenuLink to="/contact" label="Liên Hệ" activeOnlyWhenExact={false} />
                                    <MenuLink to="/about" label="Giới Thiệu" activeOnlyWhenExact={false} />
                                </ul>
                            </nav>
                        </div>
                    </aside>
                    <div className="page-wrapper">
                        {/* Content */}
                        {this.showContentMenus(routes)}
                        {/* End Content */}
                    </div>
                    <footer className="footer">
                        © 2018 by test.in
                    </footer>
                </div>
            </HashRouter>

        );
    };

    // showMenu = (menus) => {
    //     var result = null
    //     if (menus.length > 0) {
    //         result = menus.map((menu, index) => {
    //             return <MenuLink key={index} to={menu.to} label={menu.name} activeOnlyWhenExact={menu.exact} />
    //         })
    //     };
    //     return result;
    // }

    

}

export default App;