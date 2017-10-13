import * as types from './types';
import API from '../lib/api';
import * as NavigationActions from './navigation';
import * as NotificationActions from './notification';
import * as PatientActions from './patients';

export function login(credentials) {    
    return (dispatch, getState) => {
        API.post('/login', credentials, '')
        .then((resp) => {
            let json = JSON.parse(resp._bodyText);
            dispatch(setLoggedInState({ state: json }));
            if (json.status) {
                dispatch(NavigationActions.navigateToScene(getState(), 'ScanID', types.NAVIGATION_SCAN_ID));
            } else {
                dispatch(NotificationActions.setNotificationState(true, 'Invalid username or password.'));
            }
        }).catch((ex) => {
            console.log(ex);
        });
    }
}

export function logout(username) {
    return (dispatch, getState) => {
        API.post('/logout', { username: username }, getState().loggedIn.token)
        .then((resp) => {
            let json = JSON.parse(resp._bodyText);
            if (json.status) {
                dispatch(setLoggedInState({ state: { status: false, username: null, error: null, token: { token: null } } }));
                dispatch(PatientActions.clearAllPatients());
                dispatch(NavigationActions.navigateToScene(getState(), 'Login', types.NAVIGATION_SCAN_ID));
            }
        }).catch((ex) => {
            console.log(ex);
        });
    }
}

export function setLoggedInState({ state }) {
    return {
        type: types.SET_LOGIN_STATE,
        state
    };
}