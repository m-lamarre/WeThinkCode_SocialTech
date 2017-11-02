import { Component, OnInit, OnDestroy } from '@angular/core';
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
  incomingPatients: Patient[] = [
    { firstName: 'John', lastName: 'Doe', initial: 'Mr.', idNumber: '0000000000000', dateOfBirth: new Date(), gender: 'Male',
      race: 'white', nokFirstName: 'Joshua', nokLastName: 'Doe', nokCellNumber: '012 345 6789', allergies: 'none', bloodType: 'A+',
      history: 'Took an arrow to the knee', chronicMedication: 'none', medicalAid: 'BestMed', medicalAidNumber: 'AB 00001' },

    { firstName: 'Owen', lastName: 'Exall', initial: 'Mr.', idNumber: '0000000000001', dateOfBirth: new Date(), gender: 'Male',
    race: 'white', nokFirstName: 'Michael', nokLastName: 'Exall', nokCellNumber: '012 345 6790', allergies: 'none', bloodType: 'A+',
    history: 'Took an arrow to the knee', chronicMedication: 'none', medicalAid: 'BestMed', medicalAidNumber: 'AB 00001' },

    { firstName: 'Jane', lastName: 'Doe', initial: 'Mrs.', idNumber: '0000000000002', dateOfBirth: new Date(), gender: 'Female',
      race: 'white', nokFirstName: 'Joshua', nokLastName: 'Doe', nokCellNumber: '012 345 6791', allergies: 'none', bloodType: 'A+',
      history: 'Took an arrow to the knee', chronicMedication: 'none', medicalAid: 'BestMed', medicalAidNumber: 'AB 00001' }
  ];

  constructor(
    private authService: AuthService, 
    private location: PlatformLocation
  ) { 
    this.location.onPopState(() => {
      this.authService.logout();
    });
  }

  ngOnInit() {
    this.socket = io('http://localhost:2022');
  }
  
  ngOnDestroy() {
    this.socket.disconnect();
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
  dateOfBirth: Date,
  gender: string,
  race: string,
  bloodType: string,
  nokFirstName: string,
  nokLastName: string,
  nokCellNumber: string,
  medicalAid: string,
  medicalAidNumber: string,
  allergies: string,
  history: string,
  chronicMedication: string
}