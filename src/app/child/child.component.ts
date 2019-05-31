import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
@Input() user;
@Output() childEvent = new EventEmitter();
  ngOnInit() {
  }
  onChange(value) {
    this.childEvent.emit(value);
  }
}


