import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeModule } from './recipe/recipe.module';
import { QuizModule } from './quiz/quiz.module';
import { QuizRoutingModule } from './quiz/quiz-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RecipeModule,
    QuizModule,
    QuizRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
