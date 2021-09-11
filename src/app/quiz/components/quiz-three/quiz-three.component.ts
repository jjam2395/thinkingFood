import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-three',
  templateUrl: './quiz-three.component.html',
  styleUrls: ['./quiz-three.component.scss']
})
export class QuizThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttons = [
    {
      title: 'Platano',
      value: 'Platano'
    },
    {
      title: 'Brocoli',
      value: 'Brocoli'
    },
    {
      title: 'Avena',
      value: 'Avena'
    },
    {
      title: 'Cebolla',
      value: 'Cebolla'
    }
    ,
    {
      title: 'Manzana',
      value: 'Manzana'
    },
    {
      title: 'Ajo',
      value: 'Ajo'
    }
  ]
}
