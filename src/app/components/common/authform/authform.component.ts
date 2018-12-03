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
    console.log('submitting', this.userData);
    // this.submitEvent.emit(this.userData);
  }

  handleChange = ($event) => {
    console.log('event', $event);
    this.userData[$event.name] = $event.value;
    console.log('data', this.userData);
  }

}
