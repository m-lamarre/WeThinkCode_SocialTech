import { combineReducers } from 'redux';
import * as authReducer from './authReducer';
import * as navReducer from './navigationReducer';

export default combineReducers(Object.assign(
    authReducer,
    navReducer,
));