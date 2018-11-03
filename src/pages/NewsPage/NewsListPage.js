import React, { Component } from 'react';
import NewsItem from './../../components/Admin/News/NewsItem';
import { connect } from 'react-redux';
import { actFetchNewsRequest, actDeleteNewsRequest } from './../../actions/index';

class NewsListPage extends Component {

    componentDidMount() {
        this.props.fetchAllNews();
    };

    onDelete = (id) => {
        this.props.onDeleteNews(id);
    };

    render() {
        var { news } = this.props;
        return (
            <table id="demo-foo-addrow" className="table table-bordered m-t-30 table-hover contact-list" data-paging="true" data-paging-size={7}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Tiêu đề</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {this.showNews(news)}
                </tbody>
            </table>
        );
    }

    showNews(news) {
        var result = null;
        if (news.length > 0) {
            result = news.map((ne, index) => {
                return (
                    <NewsItem
                        key={index}
                        news={ne}
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
        news: state.news
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllNews: () => {
            dispatch(actFetchNewsRequest());
        },
        onDeleteNews: (id) => {
            dispatch(actDeleteNewsRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsListPage);
