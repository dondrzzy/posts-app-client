import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {

  constructor() { }
  @Input() postData;
  @Input() formTitle;
  @Input() inputs;
  @Input() submitBtnValue;
  @Output() submitEvent = new EventEmitter();

  ngOnInit() {
    console.log(this.inputs);
  }

  handleSubmit = () => {
    this.submitEvent.emit(this.postData);
  }

  handleChange = ($event) => {
    console.log('changing', $event, $event.name, $event.value);
    this.postData[$event.name] = $event.value;
  }

}
