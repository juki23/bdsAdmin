import React, { Component } from 'react';

class User extends Component {
    onSave = (e) => {
        e.preventDefault();
        this.props.onSave();
    };

    onChange = (e) => {
        this.props.onChange(e);
    };

    render() {
        var { txtUsername, txtPassword, txtPasswordConfirm } = this.props.user;
        return (
            <div className="container-fluid">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Tài khoản</h4>
                    </div>
                    <div className="col-md-7 align-self-center text-right">
                        <div className="d-flex justify-content-end align-items-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="javascript:void(0)">Trang chủ</a></li>
                                <li className="breadcrumb-item active">Tài khoản</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header bg-info">
                                <h4 className="m-b-0 text-white">Đổi mật khẩu</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSave}>
                                    <div className="form-body">
                                        <div className="row p-t-20">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">Tên tài khoản</label>
                                                    <input type="text" className="form-control" name="txtUsername" defaultValue={txtUsername} onChange={this.onChange} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">Mật khẩu</label>
                                                    <input type="password" className="form-control" name="txtPassword" defaultValue={txtPassword} onChange={this.onChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">Xác nhận mật khẩu</label>
                                                    <input type="password" className="form-control" name="txtPasswordConfirm" defaultValue={txtPasswordConfirm} onChange={this.onChange} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-actions">
                                        <button type="submit" className="btn btn-success"> <i className="fa fa-check" /> Thay đổi mật khẩu</button>&nbsp;
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

export default User;