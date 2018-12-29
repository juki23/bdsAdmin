import React, { Component } from 'react';
import NewsEdit from './../../components/Admin/News/NewsEdit';
import { actAddNewsRequest, actGetNewsRequest, actUpdateNewsRequest } from './../../actions/index';
import { connect } from 'react-redux';

class NewsActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtTitle: '',
            chkStatus: false,
            txtDescription: ''
        };
    };

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onGetNews(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps;
            this.setState({
                id: itemEditing.id,
                txtTitle: itemEditing.title,
                txtDescription : itemEditing.description,
                chkStatus: itemEditing.status
            });
        }
    };

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    };

    onSave = (e) => {
        var { id, txtTitle, txtDescription, chkStatus } = this.state;
        var { history } = this.props;

        var news = {
            id: id,
            title : txtTitle,
            status : chkStatus ? 1 : 0,
            description : txtDescription,
            create_time: new Date(),
            update_time: null
        };

        if (id) {
            news.update_time = new Date();
            this.props.onUpdateNews(news);
        } else {
            this.props.onAddNews(news);
        };
        history.goBack();
    };

    render() {
        return (
           <NewsEdit news={this.state} onSave={this.onSave} onChange={this.onChange}/>
        );
    }

}

const mapStateToProps = state => {
    return {
        itemEditing: state.newsEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddNews: (news) => {
            dispatch(actAddNewsRequest(news));
        },
        onGetNews: (id) => {
            dispatch(actGetNewsRequest(id));
        },
        onUpdateNews: (news) => {
            dispatch(actUpdateNewsRequest(news));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsActionPage);
