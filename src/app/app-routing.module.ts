import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/pages/landing/landing.component';

const routes: Routes = [
  {
      path: 'home', 
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
      redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "top"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
