import React, { Component } from 'react';

class District extends Component {
    render() {
        var {index} = this.props;
        return (
            <tr>
                <td>{index}</td>
                <td>govinda{index}@gmail.com</td>
                <td><span className="label label-success">Hoạt động</span></td>
                <td>
                    <button type="button" className="btn btn-info btn-sm">
                        <i className="fa fa-plus-circle" />
                        Cập nhật
                    </button>
                        &nbsp;
                    <button type="button" className="btn btn-dark btn-sm">
                        <i className="fa fa-plus-circle" />
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default District;