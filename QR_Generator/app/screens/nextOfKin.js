import React, { Component } from 'react';
import { 
	StyleSheet, View, Alert
} from 'react-native';
import { 
	Container, Header, Content, Footer,
	Left, Body, Title, Button, Label,
	Text, Icon,	Form, Item, Input,
	Picker, FooterTab
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import DatePicker from 'react-native-datepicker'

import PatientInformation from '../models/PatientInformation';

import DropDown from '../components/DropDown/dropdown'

const styles = StyleSheet.create({
	btn_container: {
		flex: 1,
		alignContent: 'space-between',
		alignItems: 'center',
		margin: 5
	},
	btn: {
		margin: 5
	},
	form: {
		width: 100
	},
	picker: {
		margin: 10
	}
});

export default class NextOfKin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			patient: props.patient
        }
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
						<Title>Next of Kin
                        </Title>
					</Body>
				</Header>
				<Content>
					<Form>
						<Item floatingLabel>
							<Label>First Name</Label>
							<Input maxLength={125} 
								onChangeText={(value) => { 
									this.state.patient.nextOfKinFirstName = value; 
								}}/>
						</Item>
						<Item floatingLabel>
							<Label>Last Name</Label>
							<Input maxLength={125}
								onChangeText={(value) => {
									this.state.patient.nextOfKinLastName = value;
								}}/>
						</Item>
						<Item floatingLabel>
							<Label>Cell Number</Label>
							<Input maxLength={12}
								onChangeText={(value) => {
									this.state.patient.nextOfKinCellNumber = value;
								}}/>
						</Item>	                        
					</Form>
			  	</Content>
				<Footer>
					<FooterTab>
						<Button onPress={() => { Actions.MedicalDetails(this.state); }}>
							<Text>Next</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}