import * as types from './types';

export function navigate(action) {
    return (dispatch, getState) => {
        if (action == types.NAVIGATION_LOGIN)
            return dispatch(navigateToScene(getState(), 'Login', types.NAVIGATION_LOGIN));
        else if (action == types.NAVIGATION_SIGNUP)
            return dispatch(navigateToScene(getState(), 'Signup', types.NAVIGATION_SIGNUP));
        else if (action == types.NAVIGATION_SCAN_ID)
            return dispatch(navigateToScene(getState(), 'ScanID', types.NAVIGATION_SCAN_ID));
        else if (action == types.NAVIGATION_SCAN_QR)
            return dispatch(navigateToScene(getState(), 'ScanQR', types.NAVIGATION_SCAN_QR));

        dispatch(navigateToScene(getState(), 'Login', types.NAVIGATION_LOGIN));
    }
}

export function navigateToScene(oldState, scene, type) {
    console.log(oldState);
    let state = Object.assign({}, oldState);
    state.route = scene;
    return {
        type: type,
        state
    }
}