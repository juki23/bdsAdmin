import React, { Component } from 'react';
import ProjectList from './../../components/Admin/project/ProjectList';
import ProjectItem from './../../components/Admin/project/ProjectItem';
import { connect } from 'react-redux';
import { actFetchProjectRequest, actDeleteProjectRequest } from './../../actions/index';

class ProjectListPage extends Component {
    componentDidMount() {
        this.props.fetchAllProject();
    }

    onDelete = (id) => {
        this.props.onDeleteProject(id);
    }

    render() {
        var { project } = this.props;
        return (
            <ProjectList>
                {this.showProject(project)}
            </ProjectList>
        );
    }

    showProject(project) {
        var result = null;
        if (project.length > 0) {
            result = project.map((proj, index) => {
                return (
                    <ProjectItem
                        key={index}
                        project={proj}
                        index={index}
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
        project: state.project
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProject: () => {
            dispatch(actFetchProjectRequest());
        },
        onDeleteProject: (id) => {
            dispatch(actDeleteProjectRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectListPage);
