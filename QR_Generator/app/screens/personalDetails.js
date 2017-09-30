import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { 
	Container, 
	Header, 
	Content,
	Left, 
	Body, 
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
		alignItems: 'center',
		margin: 5
	},
	btn: {
		margin: 5
	}
});

export default class PersonalDetails extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Container>
				<Header>
					<Left>
						<Button transparent onPress={() => { Actions.Home(); }}>
							<Icon name='home' />
						</Button>
					</Left>
					<Body>
						<Title>Personal Details</Title>
					</Body>
				</Header>
				<Content>
					<View style={styles.btn_container}>
						
						<Button full style={styles.btn}>
							<Text>Next</Text>
						</Button>
					</View>
				</Content>
			</Container>
		);
	}
}