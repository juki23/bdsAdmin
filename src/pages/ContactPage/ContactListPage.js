import React, { Component } from 'react';
import ContactList from './../../components/Admin/Contact/ContactList';
import ContactItem from './../../components/Admin/Contact/ContactItem';
import { connect } from 'react-redux';
import { actFetchContactPageRequest, actDeleteContactRequest } from './../../actions/index';

const dataPage = {
    currentPage: 1,
    pageSize: 5
}

class ContactListPage extends Component {
    componentDidMount() {
        this.props.fetchAllContactPage(dataPage);
    }

    onDelete = (id) => {
        this.props.onDeleteContact(id);
    }

    onChangePage = (page) => {
        dataPage.currentPage = page;
        this.props.fetchAllContactPage(dataPage);
    }

    render() {
        var { contact } = this.props;
        var totalItem = contact.length > 0 ? contact[0].sl : 0;
        return (
            <ContactList totalItem={totalItem} onChangePage={this.onChangePage} dataPage={dataPage}>
                {this.showContact(contact)}
            </ContactList>
        );
    }

    showContact(contact) {
        var result = null;
        if (contact.length > 0) {
            result = contact.map((contac, index) => {
                return (
                    <ContactItem
                        key={index}
                        contact={contac}
                        index={((dataPage.currentPage - 1) * dataPage.pageSize) + (index + 1)}
                        onDelete={this.onDelete}
                    />
                );
            });
        }
        return result;
    }

}

const mapStateToProps = state => {
    return {
        contact: state.contact
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllContactPage: (dataPage) => {
            dispatch(actFetchContactPageRequest(dataPage));
        },
        onDeleteContact: (id) => {
            dispatch(actDeleteContactRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactListPage);
