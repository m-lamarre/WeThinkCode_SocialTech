import * as types from './types';
import API from '../lib/api';
import * as NavigationActions from './navigation';
import * as NotificationActions from './notification';

export function login(credentials) {    
    return (dispatch, getState) => {
        API.post('/login', credentials)
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

export function logout() {
    return (dispatch, getState) => {
        dispatch(setLoggedInState({ state: { status: false, username: null, error: null } }));
        dispatch(NavigationActions.navigateToScene(getState(), 'Login', types.NAVIGATION_SCAN_ID));
    }
}

export function setLoggedInState({ state }) {
    return {
        type: types.SET_LOGIN_STATE,
        state
    };
}