import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {

  constructor() { }

  @Input() name;
  @Input() value;
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
