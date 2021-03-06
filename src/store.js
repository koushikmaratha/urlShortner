import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk';
import reducers from './Reducers';

const middleware = [thunkMiddleware]
const store = compose(applyMiddleware(...middleware))(createStore)(reducers);

export default store;