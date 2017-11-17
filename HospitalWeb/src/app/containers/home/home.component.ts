import { Component, OnInit, OnDestroy, NgModule } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { AuthService } from '../../services/auth.service';

import io from 'socket.io-client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  socket: any;
  selectedPatient: number = -1;
  incomingPatients: any = [
    {
      code: "A1",
      timeScanned: new Date(),
      eta: "60 min",
      patient: { firstName: 'John', lastName: 'Doe', initial: 'Mr.', idNumber: '0000000000000', dateOfBirth: '1996/08/26', gender: 'Male',
                race: 'white', nextOfKinFirstName: 'Joshua', nextOfKinLastName: 'Doe', nextOfKinCellNumber: '012 345 6789', allergies: 'none', bloodType: 'A+',
                history: 'Took an arrow to the knee', chronicMedication: 'none', medicalAid: 'BestMed', medicalAidNumber: 'AB 00001' },
      requestedMedicalAidClaim: false
    },
    {
      code: "A1",
      timeScanned: new Date(),
      eta: "60min",
      patient: { firstName: 'Jane', lastName: 'Doe', initial: 'Mrs.', idNumber: '0000000000002', dateOfBirth: '1997/02/26', gender: 'Female',
                  race: 'white', nextOfKinFirstName: 'Joshua', nextOfKinLastName: 'Doe', nextOfKinCellNumber: '012 345 6791', allergies: 'none', bloodType: 'O+',
                  history: 'Took an arrow to the knee', chronicMedication: 'none', medicalAid: 'BestMed', medicalAidNumber: 'AB 00001' },
      requestedMedicalAidClaim: true
    }
  ];
  

  constructor(
    private authService: AuthService, 
    private location: PlatformLocation
  ) { 
    this.location.onPopState(() => {
      this.authService.logout();
    });

    this.socket = io('http://localhost:2022');
    this.socket.emit('newHospital', localStorage.getItem('code'));

    this.socket.on('InboundPatient', this.inboundPatient.bind(this));
  }

  inboundPatient(msg) {
    var msg = JSON.parse(msg);
    this.incomingPatients.push(msg);
    console.log(this.incomingPatients);
  }

  ngOnInit() {
    
  }
  
  ngOnDestroy() {
    this.socket.disconnect();
    this.authService.logout();
  }

  selectedPatientChanged(index) {
    this.selectedPatient = index;
  }
}

interface Patient {
  firstName: string,
  lastName: string,
  initial: string,
  idNumber: string,
  dateOfBirth: string,
  gender: string,
  race: string,
  bloodType: string,
  nextOfKinFirstName: string,
  nextOfKinLastName: string,
  nextOfKinCellNumber: string,
  medicalAid: string,
  medicalAidNumber: string,
  allergies: string,
  history: string,
  chronicMedication: string
}