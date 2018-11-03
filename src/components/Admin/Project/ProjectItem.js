import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProjectItem extends Component {
    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        var { index, project } = this.props;
        var statusProject = project.status ? "Đang hiển thị" : "Không hiển thị";
        var labelStatus = project.status ? "info" : "danger";
        return (
            <tr>
                <td>{index + 1}</td>
                <td>
                    {project.project_name}
                </td>
                <td> {project.price}</td>
                <td> {project.address}</td>
                <td> {project.year_complete}</td>
                <td><span className={`label label-${labelStatus}`}> {statusProject}</span> </td>
                <td>
                    <Link to={`/project/edit/${project.id}`} className="btn btn-info btn-sm">
                        <i className="fa fa-pencil" />&nbsp;
                        Cập nhật
                    </Link>
                    &nbsp;
                    <button type="button" className="btn btn-dark btn-sm" onClick={() => this.onDelete(project.id)}>
                        <i className="fa fa-trash" />&nbsp;
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProjectItem;



