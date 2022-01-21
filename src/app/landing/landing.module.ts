import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { RouterModule } from '@angular/router';
import { ImgTextComponent } from './components/img-text/img-text.component';



@NgModule({
  declarations: [
    LandingComponent,
    ImgTextComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LandingModule { }
