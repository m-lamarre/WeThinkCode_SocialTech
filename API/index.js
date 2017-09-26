/**
 * Instructions to Start
 * 1) From the root, cd into the directory API.
 * 2) Run 'npm install'
 * 3) run 'npm install -g nodemon'
 * 4) Run 'npm run dev'. You should see something like: 'Listening on port: ____'
 */

var express		= require('express');
var bodyParser	= require('body-parser');

var app		=	express();
var port	=	process.env.PORT || 2022;
var router	=	express.Router();

app.use(bodyParser.urlencoded({extended:false}));

var apiAuthConfig		= require('./config/security.js');

var patientController	= require('./controllers/patientController.js');

router.get('/', (req, res) => {
	res.send('Salutations from the REST Api!')
});

router.route('/patient')
	.post(apiAuthConfig.isAuthenticated, patientController.getPatientById);

app.use('/api', router);
app.listen(port);
console.log('Listening on port: ' + port);