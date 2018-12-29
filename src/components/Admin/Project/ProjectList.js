import React, { Component } from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

class ProjectList extends Component {
    onChangePage = (page) => {
        this.props.paging.currentPage = page;
        this.props.onChangePage(page);
    }
    render() {
        var { totalItem, paging } = this.props;
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
                                        <th>Giá</th>
                                        <th>Năm bàn giao</th>
                                        <th>Quận ,huyện</th>
                                        <th>Trạng thái</th>
                                        <th>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.children}
                                </tbody>
                            </table>
                            <Pagination
                                onChange={this.onChangePage}
                                current={paging.currentPage}
                                total={totalItem}
                                pageSize={paging.pageSize}
                                showLessItems
                                showTitle={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default ProjectList;