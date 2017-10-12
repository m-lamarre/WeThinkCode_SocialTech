import { Platform } from 'react-native';

const host = Platform.select({
    ios: 'http://localhost:2022/api',
    android: 'http://10.0.2.2:2022/api'
});

class API {

    static get(route) {
        return (this.xhr(route, NULL, 'GET'));
    }

    static put(route, params) {
        return (this.xhr(route, params, 'PUT'));
    }

    static post(route, params) {
        return (this.xhr(route, params, 'POST'));
    }

    static delete(route, params) {
        return (this.xhr(route, params, 'DELETE'));
    }

    static xhr(route, params, verb) {
        console.log(host);
        const url = `${host}${route}`;

        var options = {
            method: verb,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'dataType': 'json', 
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': 'Bearer nGwembcqXjFT4uKTN0v0AAafpclPXIQMFexN4Yq9PTcTA4U5Iz65BpFjKNybgZiRh2FmPrqUYZFIt04hjzi7bAArxrwoW9zSHCcET6lQBocT2UIscAFNt6jA' 
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