import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../interfaces/recipe.interface';
import { collectionSnapshots, Firestore } from '@angular/fire/firestore';
import { collection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  
  private apiUrl: string = "https://thinkingfood-platzi-default-rtdb.firebaseio.com";
  items: any;
  recipes: Recipe [] = [];
  
  constructor(private http: HttpClient, private firestore: Firestore) {

  }

  getRecipes(): any{
    let results = this.http.get(`${this.apiUrl}/recipes.json`);
    return results;
  }

  getRecipe(id:number): any{
    let results= this.http.get(`${this.apiUrl}/recipes/${id}.json`);
    return results;
  }

  getRecipesByName(name:string): Observable<Recipe[]>{
    const url = `${ this.apiUrl}name/${name}`;
    return this.http.get<Recipe[]>(url)
  }

  gettingRecipesByName(name:string): Observable<Recipe[]>{
    const url = `${ this.apiUrl}name/${name}`;
    return this.http.get<Recipe[]>(url)
  }

  /*
  saveRecipe(recipe:Recipe): Promise<any>{
    return this.firebase.collection('recipes').add(recipe);
  }*/

  getRecipesFS(): any{
    let recipes = collection(this.firestore, 'recipes');
    
    collectionSnapshots(recipes).subscribe( data => {
      console.log(data)
      return data
    });

    //return this.firebase.collection('recipes').valueChanges();
  }
}
