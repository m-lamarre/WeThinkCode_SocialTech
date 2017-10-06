import React, { Component } from 'react';
import { 
	StyleSheet, View, Alert
} from 'react-native';
import { 
	Container, Header, Content, Footer,
	Left, Body, Title, Button, Label,
	Text, Icon,	Form, Item, Input,
	Picker
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

export default class PersonalDetails extends Component {
	constructor() {
		super();
		this.state = {
			date: '',
			patient: new PatientInformation()
		}
		this.state.patient.dateOfBirth = new Date();
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
					<Form>
						<Item floatingLabel>
							<Label>First Name</Label>
							<Input maxLength={125} 
								onChangeText={(value) => { 
									this.state.patient.firstName = value; 
								}}/>
						</Item>
						<Item floatingLabel>
							<Label>Last Name</Label>
							<Input maxLength={125}
								onChangeText={(value) => {
									this.state.patient.lastName = value;
								}}/>
						</Item>
						<Item floatingLabel>
							<Label>ID Number</Label>
							<Input maxLength={13}
								onChangeText={(value) => {
									this.state.patient.idNumber = value;
								}}/>
						</Item>		
						<DatePicker
							style={{width: 200, margin: 10}}
							date={this.state.date}
							mode="date"
							placeholder="Select Birth Date"
							format="YYYY-MM-DD"
							maxDate={new Date()}
							confirmBtnText="Confirm"
							cancelBtnText="Cancel"
							customStyles={{
								dateIcon: {
									position: 'absolute',
									left: 0,
									top: 4,
									marginLeft: 0
								},
								dateInput: {
									marginLeft: 36
								}
							}}
							onDateChange={(date) => { 
								this.setState({date: date});
								this.state.patient.dateOfBirth = date;
							}}
						/>				
						<DropDown title="Select Initial" list={["Mr.", "Mrs.", "Ms."]} 
							onSelectedChanged={(value) => { this.state.patient.initial = value; }}/>
						<DropDown title="Select Gender" list={["Male", "Female"]} 
							onSelectedChanged={(value) => { this.state.patient.gender = value; }}/>

						<DropDown title="Select Race" 
							list={["White", "Black", "Indian", "Coloured"]}
							onSelectedChanged={(value) => { 
								this.state.patient.race = value; 
							}}/>
						<DropDown title="Select Bloodtype" 
							list={["Not Sure", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]} 
							onSelectedChanged={(value) => { this.state.patient.bloodType = value; }}/>
					</Form>
			  	</Content>
				<Footer>
					<Button transparent onPress={() => { Actions.NextOfKin(this.state); }}>
						<Text>Next</Text>
					</Button>
				</Footer>
			</Container>
		);
	}
}