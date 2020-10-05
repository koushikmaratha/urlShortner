import * as ActionTypes from './ActionTypes';
import * as UrlServices from '../Services/UrlSerices';
import _ from 'lodash';

export const getAllUrls = () => {
    return ((dispatch, getState) => {
        dispatch({ type: ActionTypes.GET_ALLURLS_PENDING });
        UrlServices.getAllUrls()
            .then(response => {
                dispatch({ type: ActionTypes.GET_ALLURLS_SUCCESS, payload: response.data })
            })
            .catch(err => {
                dispatch({ type: ActionTypes.GET_ALLURLS_FAILURE })
            })
    })
};

export const getShortUrl = (short_url) => {
    return ((dispatch, getState) => {
        dispatch({ type: ActionTypes.GET_SHORTURL_PENDING });
        UrlServices.getShortUrl(short_url)
            .then(response => {
                UrlServices.saveStats({ short_urls_id: _.get(response, 'data.id', '') })
                    .then(starsRes => {
                        dispatch({ type: ActionTypes.GET_SHORTURL_SUCCESS, payload: response.data })
                    })
                    .catch(err => {
                        dispatch({ type: ActionTypes.POST_SHORTURL_FAILURE })
                    })
            })
            .catch(err => {
                dispatch({ type: ActionTypes.GET_SHORTURL_FAILURE })
            })
    })
};

export const saveShortUrl = (long_url) => {
    return ((dispatch, getState) => {
        dispatch({ type: ActionTypes.POST_SHORTURL_PENDING });
        UrlServices.saveShortUrl({ long_url })
            .then(response => {
                dispatch({ type: ActionTypes.POST_SHORTURL_SUCCESS, payload: response.short_url })
            })
            .catch(err => {
                dispatch({ type: ActionTypes.POST_SHORTURL_FAILURE })
            })
    })
};