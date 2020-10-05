import React from 'react';
import UrlReducer from './UrlReducer';
import * as ActionTypes from '../Actions/ActionTypes';


describe('Testing the Url Reducer', () => {
    let allUrlData = [
        {
            "long_url": "http://www.checkit.com",
            "short_url": "CdtqVp",
            "url_id": 19,
            "count": 0,
            "countries": 'India, USA'
        },
    ]
    function compareObjects(object1, object2) {
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);

        if (keys1.length !== keys2.length) {
            return false;
        }

        for (const key of keys1) {
            const val1 = object1[key];
            const val2 = object2[key];
            const areObjects = checkObject(val1) && checkObject(val2);
            if (
                areObjects && !compareObjects(val1, val2) ||
                !areObjects && val1 !== val2
            ) {
                return false;
            }
        }

        return true;
    }
    function checkObject(object) {
        return object != null && typeof object === 'object';
    }

    it('Should Test the New State', () => {
        const newState = UrlReducer({}, { type: ActionTypes.GET_ALLURLS_SUCCESS, payload:allUrlData });
        expect(compareObjects(newState,{isRequesting: false,  allUrlsData: allUrlData, type: ActionTypes.GET_ALLURLS_SUCCESS})).toBe(true);
    })
    it('Should Test the FAILURE state Case', () => {
        const newState = UrlReducer({}, { type: ActionTypes.GET_ALLURLS_FAILURE });
        expect(compareObjects(newState,{isRequesting: false, allUrlsData: [], type: ActionTypes.GET_ALLURLS_FAILURE})).toBe(true);
    })
})