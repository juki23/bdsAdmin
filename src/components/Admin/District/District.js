import React, { Component } from 'react';
import DistrictActionPage from './../../../pages/DistrictPage/DistrictActionPage';

class District extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Quận, huyện</h4>
                    </div>
                    <div className="col-md-7 align-self-center text-right">
                        <div className="d-flex justify-content-end align-items-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="javascript:void(0)">Trang chủ</a></li>
                                <li className="breadcrumb-item active">Quận, huyện</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <DistrictActionPage />
                </div>
            </div>
        );
    }
}

export default District;