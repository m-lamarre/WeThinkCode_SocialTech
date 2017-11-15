import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';
import { BehaviorSubject  } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

declare var jQuery:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('modal')
  modal: ElementRef

  private errMessage;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(username, password) {
    if (username === '' || password === '') {
      this.errMessage = 'Hospital Code and password required.';
      jQuery(this.modal.nativeElement).modal('show');
      return;
    }

    this.authService.login(username, password)
    .subscribe(res => {
      if (res.status) {
        this.router.navigate(['/']);
      } else {
        this.errMessage = res.msg;
        jQuery(this.modal.nativeElement).modal('show');
      }
    });
  }
}
