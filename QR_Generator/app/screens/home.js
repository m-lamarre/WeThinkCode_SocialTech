/*import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';*/
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, View } from 'native-base';
import {
  Actions
} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  btn_style: {
    margin: 5
  }
});

export default class Home extends Component {
    render() {
      return (
        <Container>
          <Header>
            <Left/>
            <Body>
              <Title>QR Generator</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <View style={styles.container}>
              <Button 
                full 
                onPress={() => { Actions.qrCreate(); }}
                style={styles.btn_style}
              >
                <Text>Create QR Code</Text>
              </Button>
              <Button 
                full
                style={styles.btn_style}
              >
                <Text>Show QR Code</Text>
              </Button>
            </View>
          </Content>
        </Container>
      );
    }
  };