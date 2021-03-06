import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  @Input() value;
  @Input() name;
  @Input() type;
  @Input() placeholder;

  @Output() changeEvent = new EventEmitter();

  ngOnInit() {
  }

  handleChange = () => {
    this.changeEvent.emit({
      value: this.value,
      name: this.name,
    });
  }
}
