import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const navigationState = createReducer({ route: 'Login' }, {
    [types.NAVIGATION_LOGIN](state, action) {
        return (action.state);
    },
    [types.NAVIGATION_SIGNUP](state, action) {
        return (action.state);
    }
});