import * as UrlActions from './UrlActions';
import * as ActionTypes from './ActionTypes';
// import store from '../store';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


describe('Testing URL Actions', () => {
    const middlewares = [thunk]
    const mockStore = configureStore(middlewares)
    const initialState = {}
    const store = mockStore(initialState);

    beforeEach(() => {store.clearActions()});
    it('Test the getAllUrls Action',()=>{
        const expectedActions = [
            {type: ActionTypes.GET_ALLURLS_PENDING},
        ];
    
        store.dispatch(UrlActions.getAllUrls());
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('Test the getShortUrl Action',()=>{
        const expectedActions = [
            {type: ActionTypes.GET_SHORTURL_PENDING},
        ];
    
        store.dispatch(UrlActions.getShortUrl('kskKSk'));
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('Test the saveShortUrl Action',()=>{
        const expectedActions = [
            {type: ActionTypes.POST_SHORTURL_PENDING},
        ];
    
        store.dispatch(UrlActions.saveShortUrl('http://www.google.com'));
        expect(store.getActions()).toEqual(expectedActions);
    });
})

