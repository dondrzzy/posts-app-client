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
  userData: User = {
    email: '',
    password: '',
    name: '',
    description: '',
  };

  loginUser = ($userData: User) => {
    this.userService.loginUser($userData);
  }

}
