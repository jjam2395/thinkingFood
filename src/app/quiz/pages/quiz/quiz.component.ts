import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  quizs = [
    {
      question: '¿Cuantas personas comen en casa?',
      id: 1,
      ruta: 'quiz-one'
    },
    {
      question: '¿Alguna dieta preferida?',
      id: 2,
      ruta: 'quiz-two'
    },
    {
      question: 'Insumos preferidos',
      id: 3,
      ruta: 'quiz-three'
    }
  ];

  i = 1;

  nextQuestion(){
    this.i += 1;
  }
}
