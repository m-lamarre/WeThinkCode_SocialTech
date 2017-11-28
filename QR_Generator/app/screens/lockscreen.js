import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, List, ListItem, 
    Text, Icon, Left, Body, Right, Switch, Button,
    Title } from 'native-base';
import { Actions } from 'react-native-router-flux';
import DeviceInfo from 'react-native-device-info';
import CONSTANTS from '../constants';
import * as ni from '../native_imports/native_imports';

export default class Disclaimer extends Component {
	constructor() {
		super();

        this.state = {
            enabled: false
        }
        console.log(ni);
        this.asyncFuntion();
    }
    
    async asyncFuntion() {
        var {
            LockScreenEnabled
        } = await ni.getLockScreenEnabled();
        this.setState({ enabled: LockScreenEnabled });
    }

    async changeLockedscreenEnabled(value) {
        var {
            LockScreenEnabled
        } = await ni.setLockScreenEnabled(value);
        console.log('Sent: ' + LockScreenEnabled);
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
						<Title>Lock Screen</Title>
					</Body>
					<Right/>
				</Header>
				<Content>
                    <List>
                        <ListItem itemDivider>
                            <Text>A</Text>
                        </ListItem>       
                        <ListItem icon style={{marginLeft: 0}}>
                            <Left />
                            <Body>
                                <Text>Enable Lockscreen</Text>
                            </Body>
                            <Right>
                                <Switch onValueChange={(value) => {
                                    this.setState({ enabled: value }); 
                                    console.log('Switch Changed: ' + value); 
                                    this.changeLockedscreenEnabled(value); }}
                                    value={this.state.enabled}/>
                            </Right>
                        </ListItem>
                    </List>
				</Content>
			</Container>
		);
	}
}