import React, { Component } from 'react';
import About from './../../components/Admin/About/About';
import { actAddAboutRequest, actUpdateAboutRequest, actFetchAboutRequest } from './../../actions/index';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

class AboutActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtTitle: '',
            txtLocation: '',
            txtPhone: '',
            txtEmail: '',
            txtAddress: ''
        };
    };

    componentDidMount() {
        this.props.fetchAllAbout();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.about) {
            var { about } = nextProps;
            if (about.length > 0) {
                this.setState({
                    id: about[0].id,
                    txtTitle: about[0].title,
                    txtLocation: about[0].location,
                    txtPhone: about[0].phone,
                    txtEmail: about[0].email,
                    txtAddress: about[0].address
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
        var { id, txtTitle, txtLocation, txtPhone, txtEmail, txtAddress } = this.state;
        var about = {
            id: id,
            title: txtTitle,
            location: txtLocation,
            phone: txtPhone,
            email: txtEmail,
            address: txtAddress
        };
        if (id) {
            this.props.onUpdateAbout(about);
        } else {
            this.props.onAddAbout(about);
        };
    };

    render() {
        return (
            <About about={this.state} onSave={this.onSave} onChange={this.onChange} />
        );
    }

}

const mapStateToProps = state => {
    return {
        about: state.about
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllAbout: () => {
            dispatch(actFetchAboutRequest());
        },
        onAddAbout: (about) => {
            dispatch(actAddAboutRequest(about));
        },
        onUpdateAbout: (about) => {
            dispatch(actUpdateAboutRequest(about));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutActionPage);