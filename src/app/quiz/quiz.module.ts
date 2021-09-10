import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HeadQuizComponent } from './components/head-quiz/head-quiz.component';
import { BackQuizComponent } from './components/back-quiz/back-quiz.component';

import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizOneComponent } from './components/quiz-one/quiz-one.component';
import { ButtonIncrementComponent } from './components/button-increment/button-increment.component'



@NgModule({
  declarations: [
    HeadQuizComponent,
    QuizComponent,
    BackQuizComponent,
    QuizOneComponent,
    ButtonIncrementComponent
  ],
  imports: [
    CommonModule,
    FormsModule   
  ],
  exports:[
    QuizComponent
  ]
 
})
export class QuizModule { }
