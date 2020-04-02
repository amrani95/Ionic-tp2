import { Component } from '@angular/core';
import {LoginService} from "../services/login.service";
import User from "../models/User";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string;
  private User: User;

  constructor(private loginService: LoginService) {}

  updateTitle() {
    this.title = 'My new title';
    // this.User = this.loginService.login('TOTO', 'pass');
   // console.log(this.User);
  }
  /*newmethodwithnotest()
  {
    this.title = 'My new title';
  */
}
