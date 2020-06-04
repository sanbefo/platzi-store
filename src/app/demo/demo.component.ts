import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';
  names = ['Santiago', 'Diego', 'Mariana'];
  power = 10;

  constructor() { }

  ngOnInit(): void {
  }

  addName() {
    this.names.push('new name');
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
