import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeModule } from './recipe/recipe.module';
import { SharedModule } from './shared/shared.module';
import { LandingModule } from './landing/landing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RecipeModule,
    SharedModule,
    LandingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
