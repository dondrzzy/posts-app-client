import { Component, OnInit, Input } from '@angular/core';
import { Body } from '@angular/http/src/body';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() user;

  ngOnInit() {
  }

}
