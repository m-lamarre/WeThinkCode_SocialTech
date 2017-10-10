import * as types from './types';

export function navigate(action) {
    return (dispatch, getState) => {
        if (action == types.NAVIGATION_LOGIN)
            return dispatch(navigateToScene(getState(), 'Login', types.NAVIGATION_LOGIN));
        else if (action == types.NAVIGATION_SIGNUP)
            return dispatch(navigateToScene(getState(), 'Signup', types.NAVIGATION_SIGNUP));
        else if (getState().loggedIn && action == types.NAVIGATION_SCAN_MENU)
            return dispatch(navigateToScene(getState(), 'ScanMenu', types.NAVIGATION_SCAN_MENU));

        dispatch(navigateToScene(getState(), 'Login', types.NAVIGATION_LOGIN));
    }
}

export function navigateToScene(oldState, scene, type) {
    let state = { route: scene };

    return {
        type: type,
        state
    }
}