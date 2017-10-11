import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import Login from './Login';
import Signup from './Signup';
import ScanID from './ScanID';
import ScanQR from './ScanQR';

class AppContianer extends Component<{}> {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        let Scene = null;
        if (this.props.navigationState.route == 'Login') {
            Scene = Login;
        } else if (this.props.navigationState.route == 'Signup') {
            Scene = Signup;
        } else if (this.props.navigationState.route == 'ScanID') {
            Scene = ScanID;
        } else if (this.props.navigationState.route == 'ScanQR') {
            Scene = ScanQR;
        }
        return (
            <Scene {...this.props}/>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}
export default connect((state) => { 
    return {
        navigationState: state.navigationState
    } 
}, mapDispatchToProps)(AppContianer);