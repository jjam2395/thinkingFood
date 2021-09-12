import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { LabelsComponent } from './components/labels/labels.component';
import { ByPlanComponent } from './pages/by-plan/by-plan.component';
import { DetailsComponent } from './pages/details/details.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { HomeComponent } from './pages/home/home.component';




@NgModule({
  declarations: [
    RecipeCardComponent,
    LabelsComponent,
    ByPlanComponent,
    DetailsComponent,
    HomeComponent
  ],
  exports: [
    ByPlanComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule
  ]
})
export class RecipeModule { }
