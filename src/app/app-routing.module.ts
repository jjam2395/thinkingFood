import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByPlanComponent } from './recipe/pages/by-plan/by-plan.component';
import { DetailsComponent } from './recipe/pages/details/details.component';

const routes: Routes = [
  /*
  {
      path: '', 
      component: landingComponent,
      pathMatch: 'full',
  },
  {
      path: 'quiz', 
      component: quizComponent,
  },*/
  {
      path: 'plan', 
      component: ByPlanComponent,
  },
  {
      path: 'recipe/:id', 
      component: DetailsComponent,
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
