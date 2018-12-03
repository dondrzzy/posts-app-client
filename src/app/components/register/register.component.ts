import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { User } from 'src/app/interfaces/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  formTitle = 'Register Form';
  submitBtnValue = 'Register';

  userData: User = {
    email: '',
    password: '',
    description: '',
    name: '',
  };

  inputs = [
    {
      name: 'name',
      placeholder: 'name',
      type: 'text',
    },
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
  textareas = [
    {
      name: 'description',
      placeholder: 'description',
    },
  ];

  clearFormdata = () => {
    this.userData = {
      email: '',
      password: '',
      description: '',
      name: '',
    };
  }


  registerUser($userData) {
    console.log('register data', $userData);
    console.log('initial data', this.userData);
    this.userService.registerUser($userData)
      .subscribe(
        res => this.clearFormdata(),
        error => console.log('s-error', error.json())
      );
  }

}
