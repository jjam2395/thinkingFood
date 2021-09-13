import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-increment',
  templateUrl: './button-increment.component.html',
  styleUrls: ['./button-increment.component.scss']
})
export class ButtonIncrementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() respuesta: EventEmitter<number>= new EventEmitter();
  value = 0

  increment() {
    this.value++;
    this.respuesta.emit(this.value);
  }

  decrement() {
    this.value--;
    this.respuesta.emit(this.value);
  }

}
