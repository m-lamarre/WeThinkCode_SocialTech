/**
 * Instructions to Start
 * 1) From the root, cd into the directory API.
 * 2) Run 'npm install'
 * 3) run 'npm install -g nodemon'
 * 4) Run 'npm run dev'. You should see something like: 'Listening on port: ____'
 */

var express		= require('express');
var bodyParser	= require('body-parser');
var mongoose	= require('mongoose');

var apiAuthConfig		= require('./config/security.js');
var patientController	= require('./controllers/patientController.js');
var loginController		= require('./controllers/loginController.js');
var userContoller		= require('./controllers/userController.js');

var app		=	express();
var port	=	process.env.PORT || 2022;
var router	=	express.Router();

mongoose.connect('mongodb://localhost:27017/SocialDB', { useMongoClient: true });

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

router.get('/', (req, res) => {
	res.send('Salutations from the REST Api!')
});

router.route('/patient')
	.post(apiAuthConfig.isAuthenticated, patientController.getPatientById);

router.route('/login')
	.post(apiAuthConfig.isAuthenticated, loginController.login);

router.route('/user/:username')
	.get(apiAuthConfig.isAuthenticated, userContoller.getUser);
router.route('/user')
	.post(apiAuthConfig.isAuthenticated, userContoller.newUser)
	.put(apiAuthConfig.isAuthenticated, userContoller.updateUser)
	.delete(apiAuthConfig.isAuthenticated, userContoller.deleteUser);

app.use('/api', router);
app.listen(port);
console.log('Listening on port: ' + port);