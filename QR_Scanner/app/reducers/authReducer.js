import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const loggedIn = createReducer({ loggedIn: false, username: null, token: null }, {
    [types.SET_LOGIN_STATE](state, action) {
        return ({
            loggedIn: action.state.status,
            username: action.state.username,
            token: action.state.token.token
        });
    }
});