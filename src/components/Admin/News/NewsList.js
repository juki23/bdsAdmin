import React, { Component } from 'react';
import NewsListPage from './../../../pages/NewsPage/NewsListPage';

class NewsList extends Component {
    render() {
        return (
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Danh sách tin tức</h4>
                        <h6 className="card-subtitle" />
                        <div className="table-responsive">
                            <NewsListPage />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default NewsList;