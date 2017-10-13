import { Platform } from 'react-native';

const host = Platform.select({
    ios: 'http://localhost:2022/api',
    android: 'http://10.0.2.2:2022/api'
});

class API {

    static get(route, token) {
        return (this.xhr(route, NULL, 'GET', token));
    }

    static put(route, params, token) {
        return (this.xhr(route, params, 'PUT', token));
    }

    static post(route, params, token) {
        return (this.xhr(route, params, 'POST', token));
    }

    static delete(route, params, token) {
        return (this.xhr(route, params, 'DELETE', token));
    }

    static xhr(route, params, verb, token) {
        console.log(host);
        const url = `${host}${route}`;

        var options = {
            method: verb,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'dataType': 'json', 
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': 'Bearer ' + token
            }
        };
        options.body = params ? JSON.stringify(params) : null;

        return (fetch(url, options).then((resp) => {
           let json = resp.json();
           if (resp.ok) {
               return (resp);
           }
           return (json.then(err => {throw err}));
        }));
    }
}

export default API;