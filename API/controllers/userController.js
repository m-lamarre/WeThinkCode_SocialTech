var User                = require('../models/UserModel');
var loginResponseModel  = require('../models/LoginResponseModel.js');
var bcrypt              = require('bcrypt-nodejs');

/**REQUIRED BODY FOR REQUEST:
 * hpcsaNumber: Number
 * username: String
 * password: String
 * hpscaNumber: String
 * email: String
 * 
 * FORMAT: json or form data
 * 
 * RETURNS: {
 *      status: Boolean,
 *      username: String,
 *      error: String
 * }
 */
exports.newUser = function(req, res) {
    var user = new User({
        HPCSANumber: req.body.hpcsaNumber,
        Email: req.body.email,
        Username: req.body.username,
        Password: req.body.password,
        JoinDate: new Date()
    });

    user.save(function(err) {
        var resp = new loginResponseModel();
        if (err && err.code == 11000) {
            resp.status = false;
            resp.username = null;
            resp.error = 'HPCSA Number or Username already exists.';
            res.json(resp);
            return ;
        } else if (err) {
            resp.status = false;
            resp.username = null;
            resp.error = err;
            res.json(resp);
            return ;
        }
        resp.status = true;
        resp.username = user.Username;
        resp.error = null;
        res.json(resp);
        return ;
    });
}

/**REQUIRED BODY FOR REQUEST:
 * oldUsername: String
 * hpcsaNumber: Number
 * username: String
 * password: String
 * hpscaNumber: String
 * email: String
 * 
 * FORMAT: json or form data
 * 
 * RETURNS: {
 *      status: Boolean,
 *      username: String,
 *      error: String
 * }
 */
exports.updateUser = function (req, res) {
    var resp = new loginResponseModel();
    User.findOne({ Username: req.body.oldUsername }).exec()
        .then(function (user) {
            if (user) {
                bcrypt.genSalt(5, function (err, salt) {
                    bcrypt.hash(req.body.password, salt, null, function (err, hash) {
                        User.update({ _id : user._id },
                            {
                                Username: req.body.username,
                                HPCSANumber: req.body.hpcsaNumber,
                                Email: req.body.email,
                                Password: hash
                            }, function (err, num, raw) {
                                if (err) {
                                    resp.status = false;
                                    resp.username = null;
                                    resp.error = 'Failed to Update user.';
                                    res.json(resp);
                                    return ;
                                } else {
                                    resp.status = true;
                                    resp.username = req.body.username;
                                    resp.error = null;
                                    res.json(resp);
                                    return ;
                                }
                            });
                    });
                });
            } else {
                resp.status = false;
                resp.error = 'Could not find user with provided username';
                res.json(resp);
            }
        })
        .catch(function (err) {
            resp.status = false;
            resp.username = null;
            resp.error = err;
            res.json(resp);
            return ;
        });
}

/**REQUIRED BODY FOR REQUEST:
 * hpcsaNumber: Number
 * username: String
 * 
 * FORMAT: json or form data
 * 
 * RETURNS: {
 *      status: Boolean,
 *      username: String,
 *      error: String
 * }
 */
exports.deleteUser = function (req, res) {
    var resp = new loginResponseModel();
    User.findOneAndRemove({
        HPCSANumber: req.body.hpcsaNumber,
        Username: req.body.username
    }).exec()
        .then((user) => {
            if (user) {
                resp.status = true;
                resp.username = user.Username;
                resp.error = null;
                res.json(resp);
            } else {
                resp.status = false;
                resp.username = null;
                resp.error = 'Could not find user with this username & HPCSA number.';
                res.json(resp);
            }
        })
        .catch((err) => {
            resp.status = false;
            resp.username = null;
            resp.error = err;
            res.json(resp);
        });
}

/**REQUIRED BODY FOR REQUEST:
 * username: String
 * 
 * FORMAT: json or form data
 * 
 * RETURNS: {
 *      status: Boolean,
 *      User: {
 *          Username: String
 *          Email: String,
 *          HPCSA Number: Number,
 *      }
 * }
 */
exports.getUser = function (req, res) {
    var resp = {
        status: false,
        User: null,
        error: null
    };
    User.findOne({ Username: req.params.username },
        { 'Username': true, 'Email': true, 'HPCSANumber': true }).exec()
        .then(function (user) {
            if (user) {
                resp.status = true;
                resp.User = user;
                res.json(resp);
            } else {
                resp.error = 'Could not find user.';
                res.json(resp);
            }
        })
        .catch(function (err) {
            resp.status = false;
            resp.error = 'Could not find user.';
            res.json(resp);
        })
}