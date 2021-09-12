import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizOneComponent} from './components/quiz-one/quiz-one.component';
import { QuizTwoComponent} from './components/quiz-two/quiz-two.component';
import { QuizThreeComponent} from './components/quiz-three/quiz-three.component';

const routes: Routes = [
    /* {
        path: '', 
        component: landingComponent,
        pathMatch: 'full',
    }, */
    {
        path: '', 
        component: QuizComponent,
        children: [
            {
                path: '',
                redirectTo: '/quiz/quiz-one',
                pathMatch: 'full'
            },
            {
                path: 'quiz-one',
                component: QuizOneComponent
            },
            {
              path: 'quiz-two',
              component: QuizTwoComponent
            },
            {
              path: 'quiz-three',
              component: QuizThreeComponent
            }
        ]
    },
  ];
  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class QuizRoutingModule { }
  