import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-one',
  templateUrl: './quiz-one.component.html',
  styleUrls: ['./quiz-one.component.scss']
})
export class QuizOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = '¿Cuantas personas comen en tu casa?';
  id = 1;
}