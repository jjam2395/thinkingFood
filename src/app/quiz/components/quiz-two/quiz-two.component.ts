import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-two',
  templateUrl: './quiz-two.component.html',
  styleUrls: ['./quiz-two.component.scss']
})
export class QuizTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tiltle = '¿Alguna dieta preferida?';

  buttons = [
    {
      title: 'Ninguna',
      value: 'Ninguna'
    },
    {
      title: 'Vegetariana',
      value: 'Vegetariana'
    },
    {
      title: 'Baja en Carbs',
      value: 'Baja en Carbs'
    },
    {
      title: 'Vegana',
      value: 'Vegana'
    }
  ]
}
