import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from './../../../interfaces/user';

@Component({
  selector: 'app-authform',
  templateUrl: './authform.component.html',
  styleUrls: ['./authform.component.css']
})
export class AuthformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() userData;
  @Input() formTitle;
  @Input() submitBtnValue;
  @Input() inputs;
  @Input() textareas;

  value = 'ks dsds'

  @Output() submitEvent = new EventEmitter();

  handleSubmit = () => {
    this.submitEvent.emit(this.userData);
  }

  handleChange = ($event) => {
    this.userData[$event.name] = $event.value;
  }

}
