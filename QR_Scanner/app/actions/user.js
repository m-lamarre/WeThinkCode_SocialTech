import * as types from './types';
import API from '../lib/api';
import * as NavigationActions from './navigation';
import * as NotificationActions from './notification';

export function signup(newUser) {
    return (dispatch, getState) => {
        API.post('/user', newUser)
        .then((resp) => {
            let json = JSON.parse(resp._bodyText);
            if (json.status) {
                dispatch(NavigationActions.navigateToScene(getState(), 'Login', types.NAVIGATION_LOGIN));
            } else {
                dispatch(NotificationActions.setNotificationState(true, json.error));
            }
        })
        .catch((ex) => {
            console.log(ex);
        });
    };
}