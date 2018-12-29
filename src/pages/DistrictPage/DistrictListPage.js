import React, { Component } from 'react';
import DistrictList from './../../components/Admin/District/DistrictList';
import DistrictItem from './../../components/Admin/District/DistrictItem';
import { connect } from 'react-redux';
import { actFetchDistrictRequest } from './../../actions/index';

class DistrictListPage extends Component {
    
    componentDidMount() {
        this.props.fetchAllDistrict();
    }

    render() {
        var { district } = this.props;
        return (
            <DistrictList>
                {this.showDistrict(district)}
            </DistrictList>
        );
    }

    showDistrict(district) {
        var result = null;
        if (district.length > 0) {
            result = district.map((distr, index) => {
                return (
                    <DistrictItem
                        key={index}
                        district={distr}
                        index={index}
                        onToggle={this.props.onToggle}
                        onDelete={this.props.onDelete}
                    />
                );
            });
        }
        return result;
    }

}

const mapStateToProps = state => {
    return {
        district: state.district
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllDistrict: () => {
            dispatch(actFetchDistrictRequest());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DistrictListPage);
