var	passport	= require('passport');
var bearerStrat	= require('passport-http-bearer').Strategy;

/**
 * Security Token (120 Long):
 * nGwembcqXjFT4uKTN0v0AAafpclPXIQMFexN4Yq9PTcTA4U5Iz65BpFjKNybgZiRh2FmPrqUYZFIt04hjzi7bAArxrwoW9zSHCcET6lQBocT2UIscAFNt6jA
**/

passport.use(new bearerStrat(
	function (accessToken, callback) {
		console.log('Token Authentication Requested.');
		
		if (!accessToken) {
			console.log('Access attempt made without access token.');
			return (callback(null, false));
		}
		if (accessToken === 'nGwembcqXjFT4uKTN0v0AAafpclPXIQMFexN4Yq9PTcTA4U5Iz65BpFjKNybgZiRh2FmPrqUYZFIt04hjzi7bAArxrwoW9zSHCcET6lQBocT2UIscAFNt6jA')
			return (callback(null, {}));
		else {
			console.log('Access attempt made with incorrect access token.');
			return (callback(null, false));
		}
	}
));
exports.isAuthenticated = passport.authenticate('bearer', { session: false });