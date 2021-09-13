import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeModule } from './recipe/recipe.module';
import { QuizModule } from './quiz/quiz.module';
import { QuizRoutingModule } from './quiz/quiz-routing.module';
import { SharedModule } from './shared/shared.module';
import { LandingModule } from './landing/landing.module';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';

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
    QuizRoutingModule,
    SharedModule,
    LandingModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyCGQ0tYppWFJkuSxBhOpkH0xVDmX245Vdc",
      authDomain: "project-id.firebaseapp.com",
      databaseURL: "https://project-id.firebaseio.com",
      projectId: "project-id",
      storageBucket: "project-id.appspot.com",
      messagingSenderId: "637908496727",
      appId: "2:637908496727:web:a4284b4c99e329d5",
      measurementId: "G-9VP01NDSXJ"
    })),
    provideAnalytics(() => getAnalytics()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
