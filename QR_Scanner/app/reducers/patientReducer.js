import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const patients = createReducer({ patientHistoryCount: 0, patientHistory: [], selectedPatient: -1 }, 
{
    [types.ADD_PATIENT_HISTORY](state, action) {
        var newState = {
            patientHistory: state.patientHistory,
            patientHistoryCount: state.patientHistoryCount,
            selectedPatient: state.selectedPatient
        };
        newState.patientHistory.push(action.patient);
        newState.patientHistoryCount += 1;
        newState.selectedPatient = newState.patientHistory.length - 1;
        return (newState);
    },
    [types.SET_SELECTED_PATIENT](state, action) {
        var newState = {
            patientHistory: state.patientHistory,
            patientHistoryCount: state.patientHistoryCount,
            selectedPatient: action.index
        };
        return (newState);
    }
})