import React, { Component } from 'react';
import FroalaEditor from 'react-froala-wysiwyg';
import $ from 'jquery';
window.$ = $;

class NewsEdit extends Component {
    componentDidMount() {
        // $("a[style='padding: 5px 10px;color: #FFF;text-decoration: none;background: #EF5350;display: block;font-size: 15px;']").remove();
        // $('div[style="z-index: 9999;width: 100%; position: relative;"]').remove();
        $('div > a[target="_blank"]').remove();
    }

    onSave =(e) => {
        e.preventDefault();
        this.props.onSave();
    };
    
    onChange = (e) => {
        this.props.onChange(e);
    };

    handleModelChange = (model) =>{
        this.props.news.txtDescription = model;
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
        var { txtTitle, chkStatus, txtDescription } = this.props.news;
        return (
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header bg-info">
                        <h4 className="m-b-0 text-white">Thêm mới thông tin</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSave}>
                            <div className="form-body">
                                <div className="row p-t-20">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="control-label">Tiêu đề</label>
                                            <input type="text" id="firstName" className="form-control" name="txtTitle" defaultValue={txtTitle} onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" name="chkStatus" value={chkStatus} checked={chkStatus} onChange={this.onChange} id="customCheck2" />
                                                <label className="custom-control-label" htmlFor="customCheck2">Kích hoạt</label>
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
                                <button type="submit" className="btn btn-success"> <i className="fa fa-check" /> Lưu lại</button>&nbsp;
                                <button type="button" className="btn btn-inverse">Thoát</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsEdit;