import React, { Component } from 'react';
import ContactItem from './ContactItem';

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
                                <li className="breadcrumb-item"><a href="javascript:void(0)">Trang chủ</a></li>
                                <li className="breadcrumb-item active">Liên hệ</li>
                            </ol>
                            <button type="button" className="btn btn-dark d-none d-lg-block m-l-15"><i className="fa fa-plus-circle" /> Tạo mới</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Danh sách liên hệ</h4>
                                <h6 className="card-subtitle" />
                                <div className="table-responsive">
                                    <table id="demo-foo-addrow" className="table table-bordered m-t-30 table-hover contact-list" data-paging="true" data-paging-size={7}>
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Tên</th>
                                                <th>Số điện thoại</th>
                                                <th>Email</th>
                                                <th>Ngày tạo</th>
                                                <th>Trạng thái</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.showContactItem()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    showContactItem = () => {
        var result = [];
        for (var i = 0; i < 10; i++) {
            result.push(<ContactItem key={i} index={i + 1} />);
        }
        return result;
    }
}

export default Contact;