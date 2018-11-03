import React, { Component } from 'react';

class District extends Component {
    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?' + id)) { //eslint-disable-line
            this.props.onDelete(id);
        }
    };

    onEditing = (id) =>{
        this.props.onToggle(id);
    };

    render() {
        var {index,district} = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{district.district_name}</td>
                <td><span className={district.status ? "label label-success" : "label label-danger"}>{district.status ? "Hoạt động" : "Không hoạt động"}</span></td>
                <td>
                    <button type="button" className="btn btn-info btn-sm" onClick={()=>this.onEditing(district.id) }>
                        <i className="fa fa-pencil" />&nbsp;
                        Cập nhật
                    </button>
                        &nbsp;
                    <button type="button" className="btn btn-dark btn-sm" onClick={()=>this.onDelete(district.id) }>
                        <i className="fa fa-trash" />&nbsp;
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default District;