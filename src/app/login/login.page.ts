import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import User from '../models/User';
import iUser from '../models/iUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
id = '';
mdp = '';
user: iUser;
loanding = false;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.loanding = true;
    this.loginService.login(this.id, this.mdp).
   subscribe( users => {
     this.user = users[0];
     this.loanding = false;
   });
  }

}
