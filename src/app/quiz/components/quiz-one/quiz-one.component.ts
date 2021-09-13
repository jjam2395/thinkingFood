import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quiz-one',
  templateUrl: './quiz-one.component.html',
  styleUrls: ['./quiz-one.component.scss']
})
export class QuizOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() numberNinos: EventEmitter<number> = new EventEmitter();
  @Output() numberAdultos: EventEmitter<number> = new EventEmitter();

  title = '¿Cuantas personas comen en tu casa?';
  id = 1;

  cantidadNinos: number = 0;
  cantidadAdultos: number = 0;

  recibiendoNinos(value: number){
    this.cantidadNinos = value;
    console.log(this.cantidadNinos);
  }

  recibiendoAdultos(value: number){
    this.cantidadAdultos = value;
    console.log(this.cantidadAdultos);
  }

}
