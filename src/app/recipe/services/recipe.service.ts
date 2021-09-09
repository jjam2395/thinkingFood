import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../interfaces/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  
  private apiUrl: string = "https://firebase/recipes/rest/v2/";

  recipes: Recipe[]=[
    {
      id:           0,
      name:         "Omelette con nopal y chorizo",
      description:  "Prepara un platillo bien reportado con proteina", 
      labels:       ["rápido", "balanceado"],
      imgRoute:     "assets/recipe/img/recipe-0.jpg"
    },
    {
      id:           1,
      name:         "Alambre de res",
      description:  "Bistec de res, chile morron, cebolla, un platillo tan nutritivo que se volverá tu favorito", 
      labels:       ["sientete un chef", "balanceado"],
      imgRoute:     "assets/recipe/img/recipe-1.JPG"
      }
  ];

  /* 
    name:           string;
    description:    string;
    labels:         string[];
    cookingTime?:    string;
    difficult?:      string; 
    */

  
  constructor(private http: HttpClient) { 
    
  }

  getRecipes():Recipe[]{
    let results=this.recipes;
    return results;
  }

  getRecipe(id:number):Recipe[]{
    let results= this.recipes.filter(item=> item.id==id);
    return results;
  }

  getRecipesByName(name:string):Observable<Recipe[]>{
    const url = `${ this.apiUrl}name/${name}`;
    return this.http.get<Recipe[]>(url)
  }
}
