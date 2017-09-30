import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { 
	Container, 
	Header, 
	Content,
	Body, 
	Right, 
	Title,
	Button,
	Text,
	Icon
} from 'native-base';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
	btn_container: {
		flex: 1,
		alignContent: 'space-between',
		margin: 5
	},
	btn: {
		margin: 5
	}
});

export default class Home extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Container>
				<Header>
					<Body>
						<Title>QR-Generator</Title>
					</Body>
					<Right>
					<Button iconRight transparent >
						<Icon ios="ios-settings" android="md-settings" style={{fontSize: 27}}/>
					</Button>
					</Right>
				</Header>
				<Content>
					<View style={styles.btn_container}>
						<Button full style={styles.btn}
							onPress={() => { Actions.Disclaimer(); }}>
							<Text>Create QR Code</Text>
						</Button>
						<Button full style={styles.btn}>
							<Text>Show QR Code</Text>
						</Button>
					</View>
				</Content>
			</Container>
		);
	}
}