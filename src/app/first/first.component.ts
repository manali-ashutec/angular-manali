import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  @Input() first: any;
  @Output() myOutput: EventEmitter<any> = new EventEmitter();
  findIndex: string;
  constructor() {}

  onDelete(event) {
    const find = this.first.find((data) => data.id === event.id);
    this.findIndex = this.first.findIndex((data) => data.id === event.id);
    console.log(find);
    this.myOutput.emit(find);
    this.first.splice(this.findIndex, 1);
  }
}
