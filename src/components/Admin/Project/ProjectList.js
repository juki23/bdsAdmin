import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class ProjectList extends Component {
    render() {
        return (
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Danh sách dự án</h4>
                        <h6 className="card-subtitle" />
                        <div className="table-responsive">
                            <table id="demo-foo-addrow" className="table table-bordered m-t-30 table-hover contact-list" data-paging="true" data-paging-size={7}>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Tên dự án</th>
                                        <th>Chủ đề</th>
                                        <th>Số điện thoại</th>
                                        <th>Năm bàn giao</th>
                                        <th>Trạng thái</th>
                                        <th>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.showProjectItem()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    showProjectItem = () => {
        var result = [];
        for (var i = 0; i < 10; i++) {
            result.push(<ProjectItem key={i} index={i + 1} />); 
        }
        return result;
    }
}

export default ProjectList;