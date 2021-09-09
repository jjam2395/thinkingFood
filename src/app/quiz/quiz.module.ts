import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadQuizComponent } from './components/head-quiz/head-quiz.component';
import { BackQuizComponent } from './components/back-quiz/back-quiz.component';

import { QuizComponent } from './pages/quiz/quiz.component';




@NgModule({
  declarations: [
    HeadQuizComponent,
    QuizComponent,
    BackQuizComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    QuizComponent
  ]
 
})
export class QuizModule { }
