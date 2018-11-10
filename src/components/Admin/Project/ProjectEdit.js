import React, { Component } from 'react';
import FroalaEditor from 'react-froala-wysiwyg';
// import upload from './../../App/assets/images/upload';

class ProjectEdit extends Component {
    onSave = (e) => {
        e.preventDefault();
        this.props.onSave();
    };

    onChange = (e) => {
        this.props.onChange(e);
    };

    handleModelChange = (model) => {
        this.props.project.txtDescription = model;
    };

    render() {
        var editorConfig = {
            toolbarButtons: ['fullscreen', '|', 'bold', 'italic', 'strikeThrough', 'underline', '|', 'paragraphFormat', 'paragraphStyle', 'align', 'formatOL', 'formatUL', 'indent', 'outdent', '|', 'insertImage', 'insertLink', 'insertVideo', 'insertFile', 'html'],
            placeholderText: 'Edit Your Content Here!',
            language: 'vi',
            charCounterCount: true,
            autoFocus: true,
            height: 200,
            heightMin: 100,
            heightMax: 300,
            imageUploadURL: 'https://api.cloudinary.com/v1_1/ho-chi-minh/image/upload',
            imageUploadParams: {
                'api_key': '162728659627778',
                'upload_preset': 'uhpdwp3y'
            },
            imageUploadMethod: 'POST',
            events: {
                'froalaEditor.image.uploaded': (e, editor, response) => {
                    response = JSON.parse(response);
                    editor.image.insert(response.secure_url, true, null, editor.image.get(), null);
                    return false
                }
            }
        };

        var { txtName, txtAddress, txtDescription, txtPrice, txtYearComplete, ddlDistrict, chkStatus, lsDistrict } = this.props.project;

        var lsDistr = lsDistrict.map((district, index) => {
            return <option key={index} value={district.id}>{district.district_name}</option>
        });

        return (
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header bg-info">
                        <h4 className="m-b-0 text-white">Tạo dự án mới</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSave}>
                            <div className="form-body">
                                <div className="row p-t-20">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Tên dự án</label>
                                            <input type="text" id="firstName" className="form-control" placeholder="John doe"
                                                name="txtName" defaultValue={txtName} onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Giá</label>
                                            <input type="text" className="form-control"
                                                name="txtPrice" defaultValue={txtPrice} onChange={this.onChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Địa chỉ</label>
                                            <input type="text" className="form-control"
                                                name="txtAddress" defaultValue={txtAddress} onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Quận, Huyện</label>
                                            <select className="custom-select col-12" id="inlineFormCustomSelect" value={ddlDistrict} name="ddlDistrict" onChange={this.onChange} >
                                                <option value={0}>Choose...</option>
                                                {lsDistr}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Thời gian bàn giao</label>
                                            <input type="text" className="form-control"
                                                name="txtYearComplete" defaultValue={txtYearComplete} onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">&nbsp;</label>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="checkProject" name="chkStatus" defaultChecked={chkStatus} onChange={this.onChange} />
                                                <label className="custom-control-label" htmlFor="checkProject">Kích hoạt</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="control-label">Chi tiết</label>
                                            <FroalaEditor tag='textarea' config={editorConfig} onModelChange={this.handleModelChange}
                                                name="txtDescription" model={txtDescription} />
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