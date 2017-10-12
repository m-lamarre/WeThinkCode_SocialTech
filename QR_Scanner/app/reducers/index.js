import { combineReducers } from 'redux';
import * as authReducer from './authReducer';
import * as navReducer from './navigationReducer';
import * as notificationReducer from './notificationReducer';
import * as patientsReducer from './patientReducer';

export default combineReducers(Object.assign(
    authReducer,
    navReducer,
    notificationReducer,
    patientsReducer,
));