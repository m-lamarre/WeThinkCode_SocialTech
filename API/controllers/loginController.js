var loginResponseModel  = require('../models/LoginResponseModel.js');
var User                = require('../models/UserModel.js');

exports.login = function(req, res) {
    console.log('LoginRequest: Received New.'); //TODO: Remove for PROD.
    var resp = new loginResponseModel();
    
    if (!req.body.username || !req.body.password) {
        resp.status = false;
        resp.error = 'No Username or Password provided.';
        console.log('LoginRequest: No Username or Password provided. (Failed)'); //TODO: Remove for PROD.
        res.json(resp);
        return ;
    }

    var username = req.body.username;
    var password = req.body.password;
    
    User.findOne({ Username: username }).exec()
        .then(function (user) {
            user.verifyPassword(password, (err, isMatch) => {
                if (!err && isMatch) {
                    resp.status = true;
                    resp.username = user.Username;
                    console.log('LoginRequest: Success.'); //TODO: Remove for PROD.
                    res.json(resp);
                } else {
                    resp.status = false;
                    resp.error = 'Invalid username or password.';
                    console.log('LoginRequest: Invalid username or password. (Failed)'); //TODO: Remove for PROD.
                    res.json(resp);
                }
            });
        })
        .catch(function (err) {
            resp.status = false;
            resp.error = 'Invalid username or password.';
            console.log('LoginRequest: Invalid username or password. (Failed)'); //TODO: Remove for PROD.
            res.json(resp);
        });
}