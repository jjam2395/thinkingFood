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
      labels:       ["rápido", "balanceado", "otra label"],
      imgRoute:     "assets/recipe/img/recipe-0.jpg",
      cookingTime:  20,
      difficult:    "fácil",
      macros:       {
        calories: 250,
        fats:     28,
        proteins: 28,
        carbs:    13
      },
      portions:  1,
      supplies:  [
        {
        quantity: 3,
        supplie: "huevos",
        unit: "pza"
        },
        {
          quantity: 80,
          supplie: "chorizo",
          unit: "gramos"
        },
        {
          quantity: 1,
          supplie: "nopal",
          unit: "pza"
        }
      ]
      
    },
      {
        id:           1,
        name:         "Alambre de res",
        description:  "Bistec de res, chile morron, cebolla, un platillo tan nutritivo que se volverá tu favorito", 
        labels:       ["sientete un chef", "balanceado", "label 3"],
        imgRoute:     "assets/recipe/img/recipe-1.JPG"
      },
      {
        id:           2,
        name:         "Panqueque",
        description:  "de avena y platanos con frutas (fresa, aguaymanto, arandanos, melón papaya).", 
        labels:       ["saludable", "avena", "Frutas"],
        imgRoute:     "assets/recipe/img/panqueque1.png"
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
