var PatientResponse = require('../models/PatientResponseModel.js');

exports.getPatientById = function(req, res) {
	var patientResp = new PatientResponse();

	if (!req.body.id || req.body == undefined) {
		patientResp.status = false;
		patientResp.message = 'No ID Number provided.'
		res.json(patientResp);
		return ;
	}
	console.log('Looking for Patient with Id: %s', req.body.id);

	/**Do some form of call here to get the data.**/

	patientResp.status = true;
	patientResp.message = null;
	patientResp.patient.firstName = 'John';
	patientResp.patient.lastName = 'Doe';
	res.json(patientResp);
}