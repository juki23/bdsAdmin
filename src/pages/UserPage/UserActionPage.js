import React, { Component } from 'react';
import User from './../../components/Admin/User/User';
import { actAddUserRequest, actUpdateUserRequest, actFetchUserRequest } from './../../actions/index';
import { connect } from 'react-redux';

class UserActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtUsername: '',
            txtPassword: '',
            txtPasswordConfirm: '',
            create_time: '',
        };
    };

    componentDidMount() {
        this.props.fetchAllUser();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.user) {
            var { user } = nextProps;
            if (user.length > 0) {
                this.setState({
                    id: user[0].id,
                    txtUsername: user[0].username,
                    create_time: user[0].create_time
                });
            }
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
        var { id, txtUsername, txtPassword, create_time } = this.state;
        var user = {
            id: id,
            username: txtUsername,
            password: txtPassword,
            status: 1,
            create_time: create_time ? create_time : new Date(),
            update_time: null
        };
        if (id) {
            user.update_time = new Date();
            this.props.onUpdateUser(user);
        } else {
            this.props.onAddUser(user);
        };
    };

    render() {
        return (
            <User user={this.state} onSave={this.onSave} onChange={this.onChange} />
        );
    }

}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllUser: () => {
            dispatch(actFetchUserRequest());
        },
        onAddUser: (user) => {
            dispatch(actAddUserRequest(user));
        },
        onUpdateUser: (user) => {
            dispatch(actUpdateUserRequest(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserActionPage);