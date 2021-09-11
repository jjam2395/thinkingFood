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
      ruta: ''
    },
    {
      question: '¿Alguna dieta preferida?',
      id: 2,
      ruta: ''
    },
    {
      question: 'Insumos preferidos',
      id: 3,
      ruta: ''
    }
  ];

  i = 0;
  quiz = this.quizs[this.i];
  

  nextQuestion(){
    this.i += 1;
    this.quiz = this.quizs[this.i];
  }
}
