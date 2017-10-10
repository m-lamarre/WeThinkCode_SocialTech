class API {
    static headers() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'dataType': 'json', 
            'X-Requested-With': 'XMLHttpRequest',
            'Authentication': 'Bearer TOKEN' 
        };
    }

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
        const host = 'localhost:3001';
        const url = `${host}${route}`;
        let options = Object.assign({method: verb}, params ? {body: JSON.stringify(params) } : null);
        options.headers = Api.headers;
        return (fetch(url, options).then(resp => {
           let json = resp.json();
           if (resp.ok()) {
               return (json);
           }
           return (json.then(err => {throw err}));
        }));
    }
}

export default Api;