import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuizRoutingModule } from './quiz-routing.module';

import { HeadQuizComponent } from './components/head-quiz/head-quiz.component';
import { BackQuizComponent } from './components/back-quiz/back-quiz.component';

import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizOneComponent } from './components/quiz-one/quiz-one.component';
import { ButtonIncrementComponent } from './components/button-increment/button-increment.component';
import { QuizTwoComponent } from './components/quiz-two/quiz-two.component';
import { QuizThreeComponent } from './components/quiz-three/quiz-three.component';
import { ButtonCheckComponent } from './components/button-check/button-check.component';
import { ButtonCardComponent } from './components/button-card/button-card.component'



@NgModule({
  declarations: [
    HeadQuizComponent,
    QuizComponent,
    BackQuizComponent,
    QuizOneComponent,
    ButtonIncrementComponent,
    QuizTwoComponent,
    QuizThreeComponent,
    ButtonCheckComponent,
    ButtonCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    QuizRoutingModule
  ],
  exports:[
  ]
 
})
export class QuizModule { }
