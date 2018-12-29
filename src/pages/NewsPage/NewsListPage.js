import React, { Component } from 'react';
import NewsItem from './../../components/Admin/News/NewsItem';
import NewsList from './../../components/Admin/News/NewsList';
import { connect } from 'react-redux';
import { actFetchNewsPageRequest, actDeleteNewsRequest } from './../../actions/index';

const paging = {
    currentPage: 1,
    pageSize: 5
}

class NewsListPage extends Component {
    componentDidMount() {
        this.props.fetchAllNewsPage(paging);
    };

    onDelete = (id) => {
        this.props.onDeleteNews(id);
    };

    onChangePage = (page) => {
        paging.currentPage = page;
        this.props.fetchAllNewsPage(paging);
    }

    render() {
        var { news } = this.props;
        var totalItem = news.length > 0 ? news[0].sl : 0;
        return (
            <NewsList totalItem={totalItem} onChangePage={this.onChangePage} paging={paging}>
                {this.showNews(news)}
            </NewsList>
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
        news: state.news
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllNewsPage: (paging) => {
            dispatch(actFetchNewsPageRequest(paging));
        },
        onDeleteNews: (id) => {
            dispatch(actDeleteNewsRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsListPage);
