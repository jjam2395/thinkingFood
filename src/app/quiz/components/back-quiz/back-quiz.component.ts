import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-back-quiz',
  templateUrl: './back-quiz.component.html',
  styleUrls: ['./back-quiz.component.scss']
})
export class BackQuizComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() idPregunta !: number;

  rutas = [
    {
      pregunta: 'quiz-one'
    },
    {
      pregunta: 'quiz-two'
    },
    {
      pregunta: 'quiz-three'
    },
  ]
}
