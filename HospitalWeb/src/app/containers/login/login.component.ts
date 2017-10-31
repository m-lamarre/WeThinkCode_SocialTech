import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit(username, password) {
    if (username === '' || password === '') {
      //need to replace this with a modal of sorts.
      alert('Please enter some credentials first.');
      return;
    }

    this.authService.login(username, password);
  }
}
