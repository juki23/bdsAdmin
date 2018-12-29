import React, { Component } from 'react';
import ContactEdit from './../../components/Admin/Contact/ContactEdit';
import { actAddContactRequest, actGetContactRequest, actUpdateContactRequest } from './../../actions/index';
import { connect } from 'react-redux';

class ContactActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtContactName: '',
            txtPhone: '',
            txtEmail: '',
            txtContent: '',
            create_time: '',
            chkStatus: false
        };
    };

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onGetContact(id);
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.contactEditing) {
            var { contactEditing } = nextProps;
            this.setState({
                id: contactEditing.id,
                txtContactName: contactEditing.contact_name,
                txtPhone: contactEditing.phone,
                txtEmail: contactEditing.email,
                txtContent: contactEditing.content,
                create_time: contactEditing.create_time,
                chkStatus: contactEditing.status
            });
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

    onSave = () => {
        var { id, txtContactName, txtPhone, txtEmail, txtContent, chkStatus, create_time } = this.state;
        var { history } = this.props;
        var contact = {
            id: id,
            contact_name: txtContactName,
            phone: txtPhone,
            email: txtEmail,
            content: txtContent,
            status: 0,
            create_time: create_time ? create_time : new Date(),
            update_time: null
        };

        if (id) {
            contact.update_time = new Date();
            this.props.onUpdateContact(contact);
        } else {
            this.props.onAddContact(contact);
        };
        history.goBack();
    };

    render() {
        return (
            <ContactEdit contact={this.state} onSave={this.onSave} onChange={this.onChange} />
        );
    }

}

const mapStateToProps = state => {
    return {
        contactEditing: state.contactEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddContact: (contact) => {
            dispatch(actAddContactRequest(contact));
        },
        onGetContact: (id) => {
            dispatch(actGetContactRequest(id));
        },
        onUpdateContact: (contact) => {
            dispatch(actUpdateContactRequest(contact));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactActionPage);