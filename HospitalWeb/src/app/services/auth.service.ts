import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject  } from 'rxjs/BehaviorSubject';
import { User } from '../interfaces/user';
import { ConstsService } from '../services/consts.service';

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private http: Http,
    private consts: ConstsService
  ) {
    this.loggedIn.next(!!localStorage.getItem('auth_token'));
  }

  login(username, password)  {
    var body = {
      code: username,
      password: password,
      token: 'kyVkTDe5ufq2V2Vv96bNT6VCHarLNaOG7gdTreBuamrTsn'
    };

    var endpoint = this.consts.USE_LOCALHOST ? this.consts.LOCALHOST_LOGIN_ENDPOINT : this.consts.API_LOGIN_ENDPOINT;
    console.log('Sending Reqeust');
    return this.http.post(endpoint, body)
      .map(res => res.json())
      .map(data => {
        console.log(data);
        if (data.status){
          localStorage.setItem('auth_token', data.token.token);
          localStorage.setItem('code', data.username);
          this.loggedIn.next(true);
        } else {
          return ({ status: false, msg: data.error });
        }
        return ({ status: true, msg: '' });
      });
  }

  logout() {
    if  (!!localStorage.getItem('auth_token') == false)
      return ;

    var headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('auth_token'));
    console.log('Bearer ' + localStorage.getItem('auth_token'));

    var body = {
      code: localStorage.getItem('code')
    };
    var endpoint = this.consts.USE_LOCALHOST ? this.consts.LOCALHOST_LOGOUT_ENDPOINT : this.consts.API_LOGOUT_ENDPOINT;

    console.log('Sending Logout Request. ' + endpoint);
    this.http.post(endpoint, body, { headers })
      .subscribe(res => console.log(res),
                error => console.log(error));
    console.log('Done Sending');

    localStorage.clear();
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
