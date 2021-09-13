import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { ByPlanComponent } from './pages/by-plan/by-plan.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      children: [
        {
          path: 'semana',
          component: ByPlanComponent
        },
        {
            path: 'receta/:id', 
            component: DetailsComponent
        },
        {
          path: '**',
          redirectTo: 'semana'
        }
      ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RecipeRoutingModule { }
