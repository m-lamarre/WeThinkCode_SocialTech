import React, { Component } from 'react';
import { 
	StyleSheet, View, Alert, Platform
} from 'react-native';
import { 
	Container, Header, Content, Footer,
	Left, Body, Title, Button, Label,
	Text, Icon,	Form, Item, Input,
	Picker, FooterTab, Right
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

const initials = ["Mr.", "Mrs.", "Ms."];
const genders = ["Male", "Female"];
const races = ["White", "Black", "Indian", "Coloured", "Other"];
const bloodtypes = ["Not Sure", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default class PersonalDetails extends Component {
	constructor() {
		super();
		this.state = {
			patient: new PatientInformation(),
			date: '',
			month: '',
			year: ''			
		}
		this.state.patient.dateOfBirth = new Date();
		
		if (Platform.OS == 'android') {
			this.state.patient.initial = initials[0];
			this.state.patient.gender = genders[0];
			this.state.patient.race = races[0];
			this.state.patient.bloodType = bloodtypes[0];
		}
	}

	validateMinMax(min, max, val) {
		var iVal = parseInt(val);
		if (iVal < min) {
			return (false);
		}
		if (iVal > max) {
			return (false);
		}
		return (true);
	}

	validate() {
		var year = parseInt(this.state.year);
		var month = parseInt(this.state.month);
		var date = parseInt(this.state.date);

		if (this.state.year === '' || this.state.month === '' || this.state.date === '') {
			Alert.alert('Invalid Date of Birth.');
			return (false);
		}
		console.log(year);

		var maxYear = new Date().getFullYear();
		if (year < (maxYear - 120) || year > maxYear) {
			Alert.alert('Invalid Date of Birth. Check the Year');
			return (false);
		}
		if (month < 1 || month > 12) {
			Alert.alert('Invalid Date of Birth. Check the Month');
			return (false);
		}
		var maxDate = new Date(year, month, 0).getDate()
		if (date < 1 || date > maxDate) {
			Alert.alert('Invalid Date of Birth. Check the Date.');
			return (false);
		}
		this.state.patient.dateOfBirth = year + '-' + (month)  + '-' + date;
		return (true);
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
						<Title>Personal Info</Title>
					</Body>
					<Right />
				</Header>
				<Content>
					<Form>
						<Item stackedLabel>
							<Label>First Name</Label>
							<Input maxLength={125}
								onChangeText={(value) => { 
									this.state.patient.firstName = value; 
								}}/>
						</Item>
						<Item stackedLabel>
							<Label>Last Name</Label>
							<Input maxLength={125}
								onChangeText={(value) => {
									this.state.patient.lastName = value;
								}}/>
						</Item>
						<Item stackedLabel>
							<Label>ID Number</Label>
							<Input maxLength={13} keyboardType='numeric'
								onChangeText={(value) => {
									this.state.patient.idNumber = value;
								}}/>
						</Item>
						<Text style={{ marginLeft: 13, marginTop: 5, color: 'gray' }}>
							Date of birth
						</Text>
						<View style={{ flex: 1, flexDirection: 'row' }}>
							<View style={{ flex: 3 }}>
								<Item stackedLabel>
									<Label>Date</Label>
									<Input maxLength={2} 
											keyboardType='numeric'
											placeholder='DD'
										onChangeText={(value) => {
											if (!this.validateMinMax(0, 31, value)) {
												Alert.alert('Invalid Date.');
											}
											this.setState({ date: value });
										}}/>
								</Item>	
							</View>
							<View style={{ flex: 3 }}>
								<Item stackedLabel>
									<Label>Month</Label>
									<Input maxLength={2} 
											keyboardType='numeric'
											placeholder='MM'
										onChangeText={(value) => {
											if (!this.validateMinMax(0, 12, value)) {
												Alert.alert('Invalid Month.');
											}
											this.setState({ month: value });
										}}/>
								</Item>	
							</View>
							<View style={{ flex: 3 }}>
								<Item stackedLabel>
									<Label>Year</Label>
									<Input maxLength={4} 
											keyboardType='numeric'
											placeholder='YYYY'
										onChangeText={(value) => {
											var maxDate = new Date().getFullYear();
											if (value.length == 4 && !this.validateMinMax((maxDate - 120), maxDate, value)) {
												Alert.alert('Invalid Year.');
											}
											this.setState({ year: value });
										}}/>
								</Item>	
							</View>
						</View>		
						<DropDown title="Select Initial" list={initials} 
							onSelectedChanged={(value) => { this.state.patient.initial = value; }}/>
						<DropDown title="Select Gender" list={genders} 
							onSelectedChanged={(value) => { this.state.patient.gender = value; }}/>

						<DropDown title="Select Race" list={races}
							onSelectedChanged={(value) => { 
								this.state.patient.race = value; 
							}}/>
						<DropDown title="Select Bloodtype" 
							list={bloodtypes} 
							onSelectedChanged={(value) => { this.state.patient.bloodType = value; }}/>
					</Form>
			  	</Content>
				<Footer>
					<FooterTab>
						<Button onPress={() => { 
							if (this.validate())
								Actions.NextOfKin(this.state); 
						}}>
							<Text>Next</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}