import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ContactItem extends Component {
    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        var { index, contact } = this.props;
        var statusContact = contact.status ? "Đã gửi thông tin" : "Chưa gửi thông tin";
        var labelStatus = contact.status ? "info" : "danger";
        return (
            <tr>
                <td>{index}</td>
                <td>
                    {contact.contact_name}
                </td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td><span className={`label label-${labelStatus}`}>{statusContact}</span> </td>
                <td>
                    <Link to={`/contact/edit/${contact.id}`} className="btn btn-info btn-sm">
                        <i className="fa fa-pencil" />&nbsp;
                        Cập nhật
                    </Link>
                    &nbsp;
                    <button type="button" className="btn btn-dark btn-sm" onClick={() => this.onDelete(contact.id)}>
                        <i className="fa fa-trash" />&nbsp;
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default ContactItem;



