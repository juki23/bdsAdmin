import React, { Component } from 'react';

class NewsItem extends Component {
    render() {
        var { index } = this.props;
        return (
            <tr>
                <td>{index}</td>
                <td>
                    Chủ đề {index}
                </td>
                <td>genelia{index}@gmail.com</td>
                <td>+{index}23 456 789</td>
                <td>12-10-2014</td>
                <td><span className="label label-danger">Đang xây dựng</span> </td>
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

export default NewsItem;



