import React, { Component } from 'react';

class ContactItem extends Component {
    render() {
        var { index } = this.props;
        return (
            <tr>
                <td>{index}</td>
                <td>
                    Tên khách hàng {index}
                </td>
                <td>genelia{index}@gmail.com</td>
                <td>+{index}23 456 789</td>
                <td>12-10-2018</td>
                <td><span className="label label-danger">Chưa gửi thông tin</span> </td>
            </tr>
        );
    }
}

export default ContactItem;



