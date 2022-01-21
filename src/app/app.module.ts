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
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

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
    AngularFireModule.initializeApp(environment.firebase)
    /*
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyCGQ0tYppWFJkuSxBhOpkH0xVDmX245Vdc",
      authDomain: "thinkingfood-platzi.firebaseapp.com",
      databaseURL: "https://thinkingfood-platzi-default-rtdb.firebaseio.com",
      projectId: "thinkingfood-platzi",
      storageBucket: "thinkingfood-platzi.appspot.com",
      messagingSenderId: "637908496727",
      appId: "2:637908496727:web:a4284b4c99e329d5",
      measurementId: "G-9VP01NDSXJ"
    })),
    provideAnalytics(() => getAnalytics()),
    provideFirestore(()=> getFirestore()),
    provideAuth(() => getAuth()),
    */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
