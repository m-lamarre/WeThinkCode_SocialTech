/**
 * Instructions to Start
 * 1) From the root, cd into the directory API.
 * 2) Run 'npm install'
 * 3) run 'npm install -g nodemon'
 * 4) Run 'npm run dev'. You should see something like: 'Listening on port: ____'
 */

var express	=	require('express');

var app		=	express();
var port	=	process.env.PORT || 2020;
var router	=	express.Router();

router.get('/', (req, res) => {
	res.send('Salutations from the REST Api!')
});

app.use('/api', router);
app.listen(port);
console.log('Listening on port: ' + port);