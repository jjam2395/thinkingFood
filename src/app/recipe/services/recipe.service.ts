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
      imgRoute:     "assets/recipe/recipe-0/img/recipe-0-01.jpg",
      cookingTime:  { value: 15, unit: 'minutos'},
      difficult:    "fácil",
      macros:       {
        calories: { value: 250, unit: 'Kcal'},
        fats:     { value: 28, unit: 'g'},
        proteins: { value: 28, unit: 'g'},
        carbs:    { value: 13, unit: 'g'},
      },
      portions:  1,
      supplies:  [
        {
        quantity:  { value: 3, unit: 'pieza'},
        supplie: "huevos",
        },
        {
          quantity: { value: 80, unit: 'gramo'},
          supplie: "chorizo",
        },
        {
          quantity: { value: 1, unit: 'pieza'},
          supplie: "nopal",
        }
      ]
      
    },
      {
        id:           1,
        name:         "Alambre de res",
        description:  "Bistec de res, chile morron, cebolla, un platillo tan nutritivo que se volverá tu favorito", 
        labels:       ["sientete un chef", "balanceado", "label 3"],
        imgRoute:     "assets/recipe/recipe-1/img/recipe-1-01.JPG"
      },
      {
        id:           2,
        name:         "Panqueque",
        description:  "de avena y platanos con frutas (fresa, aguaymanto, arandanos, melón papaya).", 
        labels:       ["saludable", "avena", "Frutas"],
        imgRoute:     "assets/recipe/recipe-2/img/recipe-2-01.png"
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
