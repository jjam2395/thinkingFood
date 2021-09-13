import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByPlanComponent } from './recipe/pages/by-plan/by-plan.component';
import { DetailsComponent } from './recipe/pages/details/details.component';
import { LandingComponent } from './landing/pages/landing/landing.component';
import { QuizComponent } from './quiz/pages/quiz/quiz.component';
import { QuizOneComponent} from './quiz/components/quiz-one/quiz-one.component';
import { QuizTwoComponent} from './quiz/components/quiz-two/quiz-two.component';
import { QuizThreeComponent} from './quiz/components/quiz-three/quiz-three.component';

const routes: Routes = [
  {
      path: '', 
      component: LandingComponent,
      pathMatch: 'full',
  }, 
  {
    path: 'quiz', 
    loadChildren: () => import('./quiz/quiz.module').then(q=>  q.QuizModule)
  },
  {
      path: 'plan', 
      loadChildren: () => import('./recipe/recipe.module').then(m=>  m.RecipeModule)
  },
  {
      path: '**',
      redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
