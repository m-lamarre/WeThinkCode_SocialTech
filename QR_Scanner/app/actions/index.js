import * as AuthActions from './auth';
import * as NavigationActions from './navigation';
import * as NotificationActions from './notification';
import * as UserActions from './user';

export const ActionCreators = Object.assign({}, 
    AuthActions,
    NavigationActions,
    NotificationActions,
    UserActions,
);