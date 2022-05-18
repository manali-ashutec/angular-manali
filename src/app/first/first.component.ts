import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  @Input() first: any;
  @Output() myOutput: EventEmitter<string> = new EventEmitter();
  outputMessage: string = 'I am child component.';
  constructor() {}

  ngOnInit() {}
  onDelete(event) {
    const findIndex = this.first.findIndex((data) => data.id === event.id);
    this.first.splice(findIndex, 1);
  }
}
