import * as ActionTypes from '../Actions/ActionTypes';

function UriReducer(state = { shortUrl: '', shortUrlData: {}, isRequesting: false, allUrlsData: [], type: undefined }, action) {
    switch (action.type) {
        case ActionTypes.GET_ALLURLS_FAILURE:
            return {
                ...state,
                isRequesting: false,
                allUrlsData: [],
                type: action.type
            }
        case ActionTypes.GET_ALLURLS_PENDING:
        case ActionTypes.GET_SHORTURL_PENDING:
        case ActionTypes.POST_SHORTURL_PENDING:
        case ActionTypes.POST_STATS_PENDING:
            return {
                ...state,
                isRequesting: true,
                type: action.type
            }
        case ActionTypes.GET_ALLURLS_SUCCESS:
            return {
                ...state,
                isRequesting: false,
                allUrlsData: action.payload,
                type: action.type
            }
        case ActionTypes.GET_SHORTURL_FAILURE:
            return {
                ...state,
                isRequesting: false,
                shortUrlData: {},
                type: action.type
            }
        case ActionTypes.GET_SHORTURL_SUCCESS:
            return {
                ...state,
                isRequesting: false,
                shortUrlData: action.payload,
                type: action.type
            }
        case ActionTypes.POST_SHORTURL_FAILURE:
            return {
                ...state,
                isRequesting: false,
                shortUrl: '',
                type: action.type
            }
        case ActionTypes.POST_SHORTURL_SUCCESS:
            return {
                ...state,
                isRequesting: false,
                shortUrl: action.payload,
                type: action.type
            }
        case ActionTypes.POST_STATS_FAILURE:
        case ActionTypes.POST_STATS_SUCCESS:
            return {
                ...state,
                isRequesting: false,
                type: action.type
            }
        default:
            return state;
    }
}

export default UriReducer;