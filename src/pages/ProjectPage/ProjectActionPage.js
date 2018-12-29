import React, { Component } from 'react';
import ProjectEdit from './../../components/Admin/Project/ProjectEdit';
import { actAddProjectRequest, actGetProjectRequest, actUpdateProjectRequest } from './../../actions/index';
import { connect } from 'react-redux';

class ProjectActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            txtAddress: '',
            txtDescription: '',
            ddlDistrict: 0,
            txtYearComplete: '',
            chkStatus: false,
            create_time: ''
        };
    };

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onGetProject(id);
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.project_name,
                txtPrice: itemEditing.price,
                txtAddress: itemEditing.address,
                txtDescription: itemEditing.description,
                ddlDistrict: itemEditing.district_id,
                txtYearComplete: itemEditing.year_complete,
                chkStatus: itemEditing.status,
                create_time: itemEditing.create_time,
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
        var { id, txtName, txtAddress, txtDescription, txtPrice, txtYearComplete, ddlDistrict, chkStatus, create_time } = this.state;
        var { history } = this.props;
        var project = {
            id: id,
            project_name: txtName,
            address: txtAddress,
            description: txtDescription,
            price: txtPrice,
            year_complete: txtYearComplete,
            district_id: parseInt(ddlDistrict),
            status: chkStatus ? 1 : 0,
            create_time: create_time ? create_time : new Date(),
            update_time: null
        };

        if (id) {
            project.update_time = new Date();
            this.props.onUpdateProject(project);
        } else {
            this.props.onAddProject(project);
        };
        history.goBack();
    };

    render() {
        return (
            <ProjectEdit project={this.state} onSave={this.onSave} onChange={this.onChange} />
        );
    }

}

const mapStateToProps = state => {
    return {
        itemEditing: state.projectEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProject: (project) => {
            dispatch(actAddProjectRequest(project));
        },
        onGetProject: (id) => {
            dispatch(actGetProjectRequest(id));
        },
        onUpdateProject: (project) => {
            dispatch(actUpdateProjectRequest(project));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectActionPage);