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
import QRCode from '../components/QRCode/qrCode';


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

export default class CreateQR extends Component {
	constructor(props) {
		super(props);
		this.state = {
			patient: props.patient
        }
    }

    getInitial(initial) {
        if (initial == "Mr.")
            return "0";
        else if (initial == "Mrs.")
            return "1";
        else if (initial == "Ms.")
            return "2";
        else
            return "0";
    }

    getGender(gender) {
        if (gender === "Male")
            return "M"
        else if (gender === "Female")
            return "F"
        else
            return "M"
    }

    getRace(race) {
        console.log("TOKEN: " + race);
        if (race === "White" || race == null)
            return "0";
        else if (race === "Black")
            return "1";
        else if (race === "Indian")
            return "2";
        else if (race === "Coloured")
            return "3";
        else
            return "9";
    }

    getBloodType(bloodType) {
        if (bloodType === "A+")
            return "1";
        else if (bloodType === "A-")
            return "2";
        else if (bloodType === "B+")
            return "3";
        else if (bloodType === "B-")
            return "4";
        else if (bloodType === "AB+")
            return "5";
        else if (bloodType === "AB-")
            return "6";
        else if (bloodType === "O+")
            return "7";
        else if (bloodType === "O-")
            return "8";
        else
            return "0";
    }

    getDate(date) {
        console.log("TOKEN: " + date);
        var strDate = date.getFullYear() + "-";
        var month = date.getMonth() + 1;
        if (month < 10)
            strDate += "0";
        strDate += month;
        if (date.getDate() < 10) {
            strDate += "-0" + date.getDate();
        } else {
            strDate += "-" + date.getDate();
        }
        return (strDate);
    }
    
    buildToken() {
        var token = "";

        token += this.state.patient.firstName;
        token += "|" + this.state.patient.lastName;
        token += "|" + this.getInitial(this.state.patient.initial);
        token += "|" + this.state.patient.idNumber;
        token += "|" + this.getDate(new Date(this.state.patient.dateOfBirth));
        token += "|" + this.getGender(this.state.patient.gender);
        token += "|" + this.getRace(this.state.patient.race);
        token += "|" + this.getBloodType(this.state.patient.bloodType);

        token += "|" + this.state.patient.nextOfKinFirstName;
        token += "|" + this.state.patient.nextOfKinLastName;
        token += "|" + this.state.patient.nextOfKinCellNumber;

        token += "|" + this.state.patient.medicalAid;
        token += "|" + this.state.patient.medicalAidNumber;

        token += "|" + this.state.patient.allergies;
        token += "|" + this.state.patient.history;
        token += "|" + this.state.patient.chronicMedication;

        console.log("TOKEN: " + token);
        return (token);
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
						<Title>QR Code</Title>
					</Body>
				</Header>
				<Content>
                    <View style={{alignItems: 'center'}}>
                        <QRCode value={this.buildToken()} width={300} height={300}/>
                    </View>
			  	</Content>
			</Container>
		);
	}
}