import {UserSession as UserSession_, UserSessionCollection as UserSessionCollection_} from './both/userSession';
import './server/userSession';

export const UserSession = UserSession_;
export const UserSessionCollection = UserSessionCollection_;


/*
api.add_files('common.js', both);
api.add_files('server.js', 'server');
api.add_files('client.js', 'client');

if (typeof api.export !== 'undefined') {
    api.export(['UserSession', 'UserSessionCollection'], both);
}
*/
