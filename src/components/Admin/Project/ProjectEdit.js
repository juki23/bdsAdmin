import React, { Component } from 'react';
import FroalaEditor from 'react-froala-wysiwyg';

class ProjectEdit extends Component {
    render() {
        var editorConfig = {
            toolbarButtons: ['fullscreen', '|', 'bold', 'italic', 'strikeThrough', 'underline', '|', 'paragraphFormat', 'paragraphStyle', 'align', 'formatOL', 'formatUL', 'indent', 'outdent', '|', 'insertImage', 'insertLink', 'insertVideo', 'insertFile', 'html'],
            placeholderText: 'Edit Your Content Here!',
            charCounterCount: false,
            height: 200,
            heightMin: 100,
            heightMax: 300
        };
        return (
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header bg-info">
                        <h4 className="m-b-0 text-white">Tạo dự án mới</h4>
                    </div>
                    <div className="card-body">
                        <form action="#">
                            <div className="form-body">
                                <div className="row p-t-20">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Tên dự án</label>
                                            <input type="text" id="firstName" className="form-control" placeholder="John doe" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Giá</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Địa chỉ</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Quận, Huyện</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Thời gian bàn giao</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Trạng thái</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="control-label">Chi tiết</label>
                                            <FroalaEditor tag='textarea' config={editorConfig} height={200} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-actions">
                                <button type="submit" className="btn btn-success"><i className="fa fa-check" /> Lưu lại</button>&nbsp;
                                <button type="button" className="btn btn-inverse">Thoát</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectEdit;