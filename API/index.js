/**
 * Instructions to Start
 * 1) From the root, cd into the directory API.
 * 2) Run 'npm install'
 * 3) run 'npm install -g nodemon'
 * 4) Run 'npm run dev'. You should see something like: 'Listening on port: ____'
 */

var express		= require('express');
var http		= require('http');
var bodyParser	= require('body-parser');
var mongoose	= require('mongoose');
var cors		= require('cors');
var socketIO	= require('socket.io');

var apiAuthConfig		= require('./config/security.js');

var patientController	= require('./controllers/patientController.js');
var loginController		= require('./controllers/loginController.js');
var userContoller		= require('./controllers/userController.js');

var app				= express();
var server			= http.Server(app);
var io				= socketIO(server);
var port			= process.env.PORT || 2022;
var router			= express.Router();
var hospitalRouter	= express.Router();

mongoose.connect('mongodb://localhost:27017/SocialDB', { useMongoClient: true });

var whitelist = [
	'http://localhost:4200'
];
var corsOptions = {
	origin: function(origin, callback) {
		if (whitelist.indexOf(origin) !== -1) {
			return callback(null, true);
		} else {
			callback(new Error('Not Allowed by CORS'));
		}
	}
};
var issuesOptions = {
	origin: true,
	methods: [ 'POST', 'PUT', 'GET', 'DELETE' ],
	credentials: true
};

hospitalRouter.use(cors(corsOptions));
hospitalRouter.all('*', cors(issuesOptions));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB Connection Error!'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/* Just to check if the api is returning a response. */
router.get('/', (req, res) => {
	res.send('Salutations from the REST Api!')
});

hospitalRouter.get('/', (req, res) => {
	res.send('Salutations from the Hospital REST Api');
});

router.route('/login')
	.post(loginController.login);
router.route('/logout')
	.post(apiAuthConfig.isAuthenticated, loginController.logout);

router.route('/patient')
	.post(apiAuthConfig.isAuthenticated, patientController.getPatientById);

router.route('/user/:username')
	.get(apiAuthConfig.isAuthenticated, userContoller.getUser);
router.route('/user')
	.post(userContoller.newUser)
	.put(apiAuthConfig.isAuthenticated, userContoller.updateUser)
	.delete(apiAuthConfig.isAuthenticated, userContoller.deleteUser);

app.use('/api', router);
app.use('/hospt', hospitalRouter);

io.on('connect', function (socket) {
	console.log('A new hospital has connected.');
	socket.on('disconnect', function (socket) {
		console.log('A hospital has disconnected.');	
	});
});

server.listen(port, function() {
	console.log('Listening on *:' + port);
});