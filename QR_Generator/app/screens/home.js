import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Home extends Component {
    onButtonPress() {
        
    };

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to QR-Generator!
          </Text>
          <View>
            <Button 
                onPress={this.onButtonPress}
                title="Generate QR Code" 
                accessibilityLabel="Generate QR codes for Paramedics to access your information."/>
            <Button 
                onPress={this.onButtonPress}
                title="Show QR Code" 
                accessibilityLabel="Show your current QR Code."/>
          </View>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    }
  });