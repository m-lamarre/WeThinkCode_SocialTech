import React, { Component } from 'react';
import * as types from '../actions/types';
import {
    View, Text, Button
} from 'native-base';

export default class Signup extends Component<{}> {
    render() {
        return (
            <View style={{ marginTop: 20 }}>
                <Text>Signup Screen</Text>
                <Button style={{marginTop: 10}} 
                    onPress={() => { this.props.navigate(types.NAVIGATION_LOGIN) }}>
                    <Text>Login</Text>
                </Button>
            </View>
        );
    }
}