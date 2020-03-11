import { Injectable } from '@angular/core';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  login(id: string, pwd: string): User {
    return new User(id, 'Name', 'prenom', 'email@ynovaix.com');
  }
}
