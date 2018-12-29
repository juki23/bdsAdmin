import React, { Component } from 'react';

class About extends Component {
    onSave =(e) => {
        e.preventDefault();
        this.props.onSave();
    };
    
    onChange = (e) => {
        this.props.onChange(e);
    };

    render() {
        var { txtTitle, txtLocation, txtPhone, txtEmail, txtAddress } = this.props.about;
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
                                <form onSubmit={this.onSave}>
                                    <div className="form-body">
                                        <div className="row p-t-20">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">Tiêu đề</label>
                                                    <input type="text" className="form-control" name="txtTitle" defaultValue={txtTitle} onChange={this.onChange} />
                                                    {/* <small className="form-control-feedback"> This is inline help </small> */}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">Vị trí</label>
                                                    <input type="text" className="form-control" name="txtLocation" defaultValue={txtLocation} onChange={this.onChange} />
                                                    {/* <small className="form-control-feedback"> This field has error. </small> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">Số điện thoại</label>
                                                    <input type="text" className="form-control" name="txtPhone" defaultValue={txtPhone} onChange={this.onChange} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">Email</label>
                                                    <input type="text" className="form-control" name="txtEmail" defaultValue={txtEmail} onChange={this.onChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">Địa chỉ</label>
                                                    <textarea type="text" className="form-control" name="txtAddress" value={txtAddress} onChange={this.onChange} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-actions">
                                        <button type="submit" className="btn btn-success"> <i className="fa fa-check" /> Lưu lại</button>
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