import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from '../../Actions';
import { bindActionCreators } from 'redux';
import * as ActionTypes from '../../Actions/ActionTypes';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shortUrl: '',
            type: '',
            long_url: '', isRequesting: ''
        }
        document.title = "URL Shortener | Home";
    }

    _handleSubmitUrl = () => {
        let { long_url } = this.state;
        if (long_url) {
            this.props.saveShortUrl(long_url);
        }
    }

    static getDerivedStateFromProps(nextProps, state) {
        if (state.type !== nextProps.type && ActionTypes.POST_SHORTURL_SUCCESS) {
            return {
                shortUrl: nextProps.shortUrl, type: nextProps.type
            }
        }
        return null;
    }

    render() {
        let { shortUrl, long_url } = this.state;
        return (
            <div className="container mt-5">
                <h1>Welcome to Short.com</h1>
                <p>Please enter your URL here</p>
                <section>
                    <form method="POST" className="my-4 form-inline">
                        <input placeholder="Url" type="url" name="full_url" value={long_url} onChange={(e) => this.setState({ long_url: e.target.value })} className="form-control col mr-2" />
                        <button type="button" className="btn btn-success" onClick={() => this._handleSubmitUrl()}>SHORTEN</button>
                    </form>
                </section>
                {shortUrl && <section className="mt-5">
                    <p>Here's your short URL!</p>
                    <h2>{`${window.location.origin.toString()}/${shortUrl}`}</h2>
                </section>}
            </div>
        );
    }
};

function mapStateToProps({ UrlReducer }) {
    return {
        isRequesting: UrlReducer.isRequesting,
        type: UrlReducer.type,
        shortUrl: UrlReducer.shortUrl
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);