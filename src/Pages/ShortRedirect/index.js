import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from '../../Actions';
import { bindActionCreators } from 'redux';
import * as ActionTypes from '../../Actions/ActionTypes';
import Pnf404 from '../../Components/Pnf404';
import _ from 'lodash';
import Loader from '../../Components/Loader';


class ShortRedirect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '', shortUrlData: {}, redirectToUrl: false
        }
        document.title = "URL Shortener | Redirecting...";
    }

    componentDidMount() {
        this.props.getShortUrl(this.props.match.params.id);
    }

    static getDerivedStateFromProps(nextProps, state) {
        if (state.type !== nextProps.type && nextProps.type === ActionTypes.GET_SHORTURL_SUCCESS) {
            return {
                type: nextProps.type,
                shortUrlData: nextProps.shortUrlData, redirectToUrl: true
            }
        } else if (state.type !== nextProps.type && nextProps.type === ActionTypes.GET_SHORTURL_FAILURE) {
            return {
                type: nextProps.type,
                shortUrlData: {}
            }
        }
        return null;
    }

    _handleRedirection = () => {
        let { redirectToUrl, shortUrlData } = this.state;
        const long_url = _.get(shortUrlData, 'long_url', '');
        if (long_url && redirectToUrl) {
            window.location = long_url;
        }
    }

    render() {
        let { type } = this.state;
        return (
            <>
                {this._handleRedirection()}
                <div className="container mt-5 " >
                    <div className="d-flex justify-content-center align-items-center mt-5">
                        {type === ActionTypes.GET_SHORTURL_FAILURE ? <Pnf404 /> : <Loader />}
                    </div>
                </div>
            </>
        );
    }
};


function mapStateToProps({ UrlReducer }) {
    return {
        isRequesting: UrlReducer.isRequesting,
        type: UrlReducer.type,
        shortUrlData: UrlReducer.shortUrlData
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShortRedirect);