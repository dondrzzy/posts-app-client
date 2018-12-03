import { Component, OnInit } from '@angular/core';
import { User } from './../../interfaces/user';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  formTitle = 'Login Form';
  submitBtnValue = 'Login';
  userData = {
    email: '',
    password: '',
  };

  inputs = [
    {
      name: 'email',
      placeholder: 'email address',
      type: 'email',
    },
    {
      name: 'password',
      placeholder: 'password',
      type: 'password',
    },
  ];

  loginUser = ($userData) => {
    console.log('login data', $userData);
    console.log('initial data', this.userData);
    this.userService.loginUser($userData);
  }

}
