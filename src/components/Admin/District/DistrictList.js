import React, { Component } from 'react';
import DistrictItem from './DistrictItem';

class DistrictList extends Component {
    render() {
        return (
            <table id="demo-foo-addrow" className="table table-bordered m-t-30 table-hover contact-list" data-paging="true" data-paging-size={7}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Quận, Huyện</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </table>
        );
    }
}

export default DistrictList;