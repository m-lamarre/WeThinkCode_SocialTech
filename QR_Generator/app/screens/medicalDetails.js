import React, { Component } from 'react';
import { 
	StyleSheet, View, Alert
} from 'react-native';
import { 
	Container, Header, Content, Footer,
	Left, Body, Title, Button, Label,
	Text, Icon,	Form, Item, Input,
	Picker, InputGroup
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
	},
	form: {
		width: 100
	},
	picker: {
		margin: 10
	}
});

export default class MedicalDetails extends Component {
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
						<Title>Medical Details</Title>
					</Body>
				</Header>
				<Content>
					<Form>
						<Item floatingLabel>
							<Label>Medical Aid</Label>
							<Input maxLength={124} 
								onChangeText={(value) => { 
									this.state.patient.nextOfKinFirstName = value; 
								}}/>
						</Item>
						<Item floatingLabel>
							<Label>Medical Aid Number</Label>
							<Input maxLength={20}
								onChangeText={(value) => {
									this.state.patient.nextOfKinLastName = value;
								}}/>
						</Item>
						<InputGroup borderType='regular'>
                            <Input style={{
                                marginTop: 5,
                                width: 200, height: 200
                            }}  multiline={true} placeholder='Type your allergies here'
                            maxLength={850}
                            onChangeText={(value) => {
                                this.state.patient.allergies = value;
                            }}/>
                        </InputGroup>                        
						<InputGroup borderType='regular'>
                            <Input style={{
                                marginTop: 5,
                                width: 200, height: 200
                            }}  multiline={true} placeholder='Type your medical history here'
                            maxLength={850}
                            onChangeText={(value) => {
									this.state.patient.history = value;
                            }}/>
                        </InputGroup>                        
						<InputGroup borderType='regular'>
                            <Input style={{
                                marginTop: 5,
                                width: 200, height: 200
                            }}  multiline={true} placeholder='Type any chronic medication here'
                            maxLength={800}
                            onChangeText={(value) => {
                                this.state.patient.chronicMedication = value;
                            }}/>
                        </InputGroup>                     
					</Form>
			  	</Content>
				<Footer>
					<Button transparent onPress={() => { Actions.CreateQR(this.state); }}>
						<Text>Finish</Text>
					</Button>
				</Footer>
			</Container>
		);
	}
}