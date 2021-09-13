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
      value: 'Platano',
      select: false
    },
    {
      title: 'Brocoli',
      value: 'Brocoli',
      select: false
    },
    {
      title: 'Avena',
      value: 'Avena',
      select: false
    },
    {
      title: 'Cebolla',
      value: 'Cebolla',
      select: false
    }
    ,
    {
      title: 'Manzana',
      value: 'Manzana',
      select: false
    },
    {
      title: 'Ajo',
      value: 'Ajo',
      select: false
    }
  ]
}
