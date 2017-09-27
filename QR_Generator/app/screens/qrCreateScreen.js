import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { 
    Container, 
    Header, 
    Title, 
    Content, 
    Footer, 
    FooterTab, 
    Button, 
    Left, 
    Right, 
    Body,
    Icon, 
    Text, 
    View, 
    Form, 
    Item, 
    Input, 
    Label 
} from 'native-base';
import {
  Actions
} from 'react-native-router-flux';
import QRCode from 'react-native-qrcode-svg';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    btn_Create: {
        margin: 10,
        alignItems: 'center'
    },
    qrContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default class QrCreateScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validIDNumber: false,
            myNumber: '0000000000000',
            showQRCode: false
        };
    }

    onChanged(text){
        let newText = '';
        let numbers = '0123456789';
      
        for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
            }
            else {
                alert("Please enter numbers only.");
            }
            this.setState({ 
                myNumber: newText
            });
        }
      }

    toggleShowQRCode() {
        this.setState({
            showQRCode: !this.state.showQRCode
        });
    }

    _renderIdInput() {
        if (!this.state.showQRCode) {
            return (
            <View>
                <Form>
                    <Item floatingLabel error={!this.state.validIDNumber} success={this.state.validIDNumber}>
                        <Label>ID Number</Label>
                        <Input 
                            keyboardType = 'numeric'
                            maxLength={13}
                            onChangeText = {(text)=> this.onChanged(text)}
                        />
                    </Item>
                </Form>
                <Button full style={styles.btn_Create} onPress={() => {if (this.state.myNumber.length == 13) this.toggleShowQRCode(); }}>
                    <Text>Create</Text>
                </Button>
            </View>
            );
        }
    }

    _renderQRCoder() {
        if (this.state.showQRCode) {
            return (
                <View style={styles.qrContainer}>
                    <QRCode
                        value={this.state.myNumber}
                        size={350}
                        color='black'/>
                    <Button full style={styles.btn_Create}>
                        <Text>Save QR Code</Text>
                    </Button>
                </View>
            );
        }
    }

    render() {
      return (
        <Container>
          <Header>            
            <Left>
              <Button transparent onPress={() => { Actions.pop(); }}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Create QR</Title>
            </Body>
            <Right />
          </Header>
          <Content style={styles.container}>
            {this._renderIdInput()}
            {this._renderQRCoder()}
          </Content>
        </Container>
      );
    }
  };