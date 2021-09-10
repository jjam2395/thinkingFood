import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-increment',
  templateUrl: './button-increment.component.html',
  styleUrls: ['./button-increment.component.scss']
})
export class ButtonIncrementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value = 0

  increment() {
    
  }

  decrement() {

  }

}
