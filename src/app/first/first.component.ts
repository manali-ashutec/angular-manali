import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  @Input() first: any;
  constructor() {}

  ngOnInit() {
    console.log(this.first);
  }
}
