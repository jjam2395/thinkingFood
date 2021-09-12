import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/pages/landing/landing.component';

const routes: Routes = [
  
  {
      path: '', 
      component: LandingComponent,
      pathMatch: 'full',
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
