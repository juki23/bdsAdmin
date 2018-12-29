import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ContactEdit extends Component {

    onSave = (e) => {
        e.preventDefault();
        this.props.onSave();
    };

    onChange = (e) => {
        this.props.onChange(e);
    };

    render() {
        var { txtContactName, txtPhone, txtEmail, txtContent, chkStatus } = this.props.contact;

        return (
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header bg-info">
                        <h4 className="m-b-0 text-white">Tạo liên hệ mới</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSave}>
                            <div className="form-body">
                                <div className="row p-t-20">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Tên liên hệ</label>
                                            <input type="text" className="form-control"
                                                name="txtContactName" defaultValue={txtContactName} onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Số điện thoại</label>
                                            <input type="text" className="form-control"
                                                name="txtPhone" defaultValue={txtPhone} onChange={this.onChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Email</label>
                                            <input type="text" className="form-control"
                                                name="txtEmail" defaultValue={txtEmail} onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Nội dung</label>
                                            <textarea type="text" className="form-control" name="txtContent" value={txtContent} onChange={this.onChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-actions">
                                <button type="submit" className="btn btn-success"><i className="fa fa-check" /> Lưu lại</button>&nbsp;
                                <button type="button" className="btn btn-inverse">
                                    <Link to="/contact" >Thoát</Link>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactEdit;