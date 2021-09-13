import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-head-quiz',
  templateUrl: './head-quiz.component.html',
  styleUrls: ['./head-quiz.component.scss']
})
export class HeadQuizComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() idPregunta : number = 1;  

}
