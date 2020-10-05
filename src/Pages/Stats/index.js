import React from 'react';
import StatListItem from '../../Components/StatListItem';
import { connect } from 'react-redux';
import { ActionCreators } from '../../Actions';
import { bindActionCreators } from 'redux';
import * as ActionTypes from '../../Actions/ActionTypes';
import _ from 'lodash';

const statData = { long_url: 'https://www.google.in', short_url: 'hTjsuT', total_clicks: 120, countries: ['India', 'Pakisthan', 'USA'] }
class Stats extends React.Component {
    constructor(props) {
        super(props);
        document.title = "URL Shortener | Stats";
        this.state = {
            statsData: [], type: ''
        }
    }

    componentDidMount() {
        this.props.getAllUrls();
    }

    static getDerivedStateFromProps(nextProps, state) {
        if (nextProps.type !== state.type && nextProps.type === ActionTypes.GET_ALLURLS_SUCCESS) {
            return {
                statsData: nextProps.allUrlsData
            }
        }
        return null;
    }
    render() {
        let { statsData } = this.state;
        return (
            <div className="container mt-5">
                <h1>Analytics</h1>
                <ul className="list-group">
                    {_.map(statsData, (stat, index) => <StatListItem key={index} statData={stat} />)}
                </ul>
            </div>
        );
    }
};


function mapStateToProps({ UrlReducer }) {
    return {
        isRequesting: UrlReducer.isRequesting,
        type: UrlReducer.type,
        allUrlsData: UrlReducer.allUrlsData
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);