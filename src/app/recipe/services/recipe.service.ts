import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../interfaces/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  
  private apiUrl: string = "https://firebase/recipes/rest/v2/";

  
  constructor(private http: HttpClient) { 
    
  }

  getRecipe(id:string):Observable<Recipe>{
    const url = `${ this.apiUrl}id/${id}`;
    return this.http.get<Recipe>(url)
  }
  getRecipesByName(name:string):Observable<Recipe[]>{
    const url = `${ this.apiUrl}name/${name}`;
    return this.http.get<Recipe[]>(url)
  }
}
