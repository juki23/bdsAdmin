import React, { Component } from 'react';
import ProjectList from './../../components/Admin/Project/ProjectList';
import ProjectItem from './../../components/Admin/Project/ProjectItem';
import { connect } from 'react-redux';
import { actFetchProjectPageRequest, actDeleteProjectRequest } from './../../actions/index';

const paging = {
    currentPage: 1,
    pageSize: 5
}

class ProjectListPage extends Component {
    componentDidMount() {
        this.props.fetchAllProjectPage(paging);
    }

    onDelete = (id) => {
        this.props.onDeleteProject(id);
    }

    onChangePage = (page) => {
        paging.currentPage = page;
        this.props.fetchAllProjectPage(paging);
    }

    render() {
        var { project } = this.props;
        var totalItem = project.length > 0 ? project[0].sl : 0;
        return (
            <ProjectList totalItem={totalItem} onChangePage={this.onChangePage} paging={paging}>
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
                        index={((paging.currentPage - 1) * paging.pageSize) + (index + 1)}
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
        fetchAllProjectPage: (paging) => {
            dispatch(actFetchProjectPageRequest(paging));
        },
        onDeleteProject: (id) => {
            dispatch(actDeleteProjectRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectListPage);
