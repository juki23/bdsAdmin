import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Giới thiệu</h4>
                    </div>
                    <div className="col-md-7 align-self-center text-right">
                        <div className="d-flex justify-content-end align-items-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="javascript:void(0)">Trang chủ</a></li>
                                <li className="breadcrumb-item active">Giới thiệu</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header bg-info">
                                <h4 className="m-b-0 text-white">Thông tin</h4>
                            </div>
                            <div className="card-body">
                                <form action="#">
                                    <div className="form-body">
                                        <div className="row p-t-20">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">Họ và Tên</label>
                                                    <input type="text" id="firstName" className="form-control" placeholder="John doe" />
                                                    <small className="form-control-feedback"> This is inline help </small> </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">Email</label>
                                                    <input type="text" id="lastName" className="form-control" placeholder="exam@gamil.com" />
                                                    <small className="form-control-feedback"> This field has error. </small> </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">Số điện thoại</label>
                                                    <input type="text" className="form-control" placeholder="09012345678" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">Địa chỉ</label>
                                                    <textarea type="text" className="form-control" placeholder="TP Hồ Chí Minh" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-actions">
                                        <button type="submit" className="btn btn-success"> <i className="fa fa-check" /> Lưu lại</button>&nbsp;
                                        <button type="button" className="btn btn-inverse">Thoát</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;