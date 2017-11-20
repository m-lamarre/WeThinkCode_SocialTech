import * as types from './types';
import API from '../lib/api';
import CONSTANTS from '../constants';

export function getHospitals() {
    return (dispatch, getState) => {
        API.post(CONSTANTS.API_ENDPOINTS.HOSPITALS, null, getState().loggedIn.token)
        .then(resp => {
            let json = JSON.parse(resp._bodyText);
            dispatch(setHospitals(json));
        })
        .catch((err) => {
            console.log(err);
        })
    };
}

export function sendInboundPatient(patient, hospital) {
    return (dispatch, getState) => {
        var data = {
            code: 'AA',
            hospitalCode: hospital.Code,
            patient: patient
        };
        API.post(CONSTANTS.API_ENDPOINTS.INBOUND_PATIENT, data, getState().loggedIn.token)
        .then(resp => {
            console.log(resp);
        })
        .catch((err) => {
            console.log(err);
        });
    }
}

export function setSelectedHospital(index) {
    return {
        type: types.SET_SELECTED_HOSPITAL,
        index
    };
}

export function setHospitals(hospitals) {
    return {
        type: types.SET_HOSPITALS,
        hospitals
    };
}