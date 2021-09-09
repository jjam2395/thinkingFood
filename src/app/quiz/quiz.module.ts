import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadQuizComponent } from './components/head-quiz/head-quiz.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { BackQuizComponent } from './components/back-quiz/back-quiz.component';



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
    HeadQuizComponent,
    QuizComponent,
    BackQuizComponent
  ]
 
})
export class QuizModule { }
