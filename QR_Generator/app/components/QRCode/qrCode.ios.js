import React, {Component} from 'react';
import { Image } from 'react-native';
import {
    View, Text
} from 'native-base';

class QRCode extends Component {
    async getQR() {
        /*var {
            QRCodeBase64
        } = await QRCodeAndroid.createQRCode(
            this.state.value,
            this.state.width,
            this.state.height,
            this.state.key);
        this.setState({uri: 'data:image/png;base64,' + QRCodeBase64 });*/
    }

    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            width: props.width,
            height: props.height,
            key: "1234567890123456",
            uri: ""
        }
       //this.getQR();
    }
    
    render() {
        return (
            <View>
                <Text>In progress.</Text>
            </View> 
        )
    }
}

QRCode.defaultProps = {
    width: 200,
    height: 200,
    value: "Fooled Ya!"
}

module.exports = QRCode;