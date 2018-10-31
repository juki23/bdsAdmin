import React, { Component } from 'react';
import DistrictItem from './DistrictItem';

class District extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Quận, huyện</h4>
                    </div>
                    <div className="col-md-7 align-self-center text-right">
                        <div className="d-flex justify-content-end align-items-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="javascript:void(0)">Trang chủ</a></li>
                                <li className="breadcrumb-item active">Quận, huyện</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Danh sách quận, huyện</h4>
                                <h6 className="card-subtitle" />
                                <button type="button" className="btn btn-info btn-rounded m-t-10 float-right" data-toggle="modal" data-target="#add-contact">Add New Contact</button>
                                {/* Add Contact Popup Model */}
                                <div id="add-contact" className="modal fade in" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="myModalLabel">Thêm quận, huyện</h5> </div>
                                            <div className="modal-body">
                                                <from className="form-horizontal form-material">
                                                    <div className="form-group">
                                                        <div className="col-md-12 m-b-20">
                                                            <input type="text" className="form-control" placeholder="Tên quận, huyện" /> </div>
                                                        <div className="col-md-12 m-b-20">
                                                            <input type="text" className="form-control" placeholder="Salary" /> </div>
                                                        <div className="col-md-12 m-b-20">
                                                            <div className="fileupload btn btn-danger btn-rounded waves-effect waves-light"><span><i className="ion-upload m-r-5" />Upload Contact Image</span>
                                                                <input type="file" className="upload" /> </div>
                                                        </div>
                                                    </div>
                                                </from>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-info waves-effect" data-dismiss="modal">Save</button>
                                                <button type="button" className="btn btn-default waves-effect" data-dismiss="modal">Cancel</button>
                                            </div>
                                        </div>
                                        {/* /.modal-content */}
                                    </div>
                                    {/* /.modal-dialog */}
                                </div>
                                <div className="table-responsive">
                                    <table id="demo-foo-addrow" className="table table-bordered m-t-30 table-hover contact-list" data-paging="true" data-paging-size={7}>
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Quận, Huyện</th>
                                                <th>Trạng thái</th>
                                                <th>Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.showDistrictItem()}
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

    showDistrictItem = () => {
        var result = [];
        for (let i = 0; i < 10; i++) {
            result.push(<DistrictItem key={i} index={i + 1} />)
        }
        return result;
    }
}

export default District;