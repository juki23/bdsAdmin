import React, { Component } from 'react';
import DistrictListPage from './DistrictListPage';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { actAddDistrictRequest, actGetDistrictRequest, actUpdateDistrictRequest, actDeleteDistrictRequest } from './../../actions/index';
import { connect } from 'react-redux';

class DistrictActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            chkStatus: false,
            create_time: '',
            modal: false
        };
        this.onToggle = this.onToggle.bind(this);
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.district_name,
                chkStatus: itemEditing.status,
                create_time : itemEditing.create_time
            });
        }
    };

    onToggle(id) {
        this.setState({
            id: '',
            txtName: '',
            chkStatus: false,
            modal: !this.state.modal
        });
        if (typeof id === "number") {
            this.props.onGetDistrict(id);
        };
    };

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        var { id, txtName, chkStatus, create_time } = this.state;

        var district = {
            id: id,
            district_name: txtName,
            status: chkStatus ? 1 : 0,
            create_time: create_time ? create_time : new Date(),
            update_time: null
        };

        if (id) {
            district.update_time = new Date();
            this.props.onUpdateDistrict(district);
        } else {
            this.props.onAddDistrict(district);
        };
        this.onToggle();
    };

    onDelete = (id) => {
        this.props.onDeleteDistrict(id)
    };

    render() {
        var { txtName, chkStatus, id } = this.state;
        return (
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Danh sách quận, huyện</h4>
                        <h6 className="card-subtitle" />
                        <button type="button" className="btn btn-info btn-rounded m-t-10 float-right" onClick={this.onToggle} >Thêm quận, huyện</button>
                        <Modal isOpen={this.state.modal} toggle={this.onToggle}>
                            <ModalHeader toggle={this.onToggle}>
                                {id ? "Cập nhật" : "Thêm"} quận, huyện
                            </ModalHeader>
                            <ModalBody>
                                <div className="form-horizontal form-material">
                                    <div className="form-group">
                                        <div className="col-md-12 m-b-20">
                                            <input type="text" className="form-control" name="txtName" value={txtName} onChange={this.onChange} placeholder="Tên quận, huyện" />
                                        </div>
                                        <div className="col-md-12 m-b-20">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" name="chkStatus" value={chkStatus} checked={chkStatus} onChange={this.onChange} id="customCheck2" />
                                                <label className="custom-control-label" htmlFor="customCheck2">Kích hoạt</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.onSave}>Lưu lại</Button>{' '}
                                <Button color="secondary" onClick={this.onToggle}>Thoát</Button>
                            </ModalFooter>
                        </Modal>
                        <div className="table-responsive">
                            <DistrictListPage onToggle={this.onToggle} onDelete={this.onDelete} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        itemEditing: state.districtEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddDistrict: (district) => {
            dispatch(actAddDistrictRequest(district));
        },
        onGetDistrict: (id) => {
            dispatch(actGetDistrictRequest(id));
        },
        onUpdateDistrict: (district) => {
            dispatch(actUpdateDistrictRequest(district));
        },
        onDeleteDistrict: (id) => {
            dispatch(actDeleteDistrictRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DistrictActionPage);
