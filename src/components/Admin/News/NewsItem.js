import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewsItem extends Component {
    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        var { index, news } = this.props;
        var statusNews = news.status ? "Đang hiển thị" : "Không hiển thị";
        var labelStatus = news.status ? "info" : "danger";
        return (
            <tr>
                <td>{index + 1}</td>
                <td>
                    {news.title}
                </td>
                <td><span className={`label label-${labelStatus}`}>{statusNews}</span> </td>
                <td>
                    <Link to={`/news/edit/${news.id}`} className="btn btn-info btn-sm">
                        <i className="fa fa-plus-circle" />
                        Cập nhật
                    </Link>
                    &nbsp;
                    <button type="button" className="btn btn-dark btn-sm" onClick={() => this.onDelete(news.id)}>
                        <i className="fa fa-plus-circle" />
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default NewsItem;



