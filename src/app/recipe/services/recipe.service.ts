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
      day:          "martes",
      typemeal:     "Desayuno",
      name:         "Panqueque",
      description:  "de avena y platanos con frutas (fresa, aguaymanto, arandanos, melón papaya).", 
      labels:       ["Saludable", "Avena", "Frutas", "Fresas", "Aguaymanto", "Miel", "Bajo en calorias", "Arándanos", "Melón", "Papaya"],
      imgRoute:     "https://drive.google.com/uc?export=view&id=1mZKvuJC0AxGuvU19FmU_niyXAuv9Dl7F",
      cookingTime:  { value: 30, unit: 'minutos'},
      difficult:    "medio",
      macros:       {
        calories: { value: 610, unit: 'Kcal'},
        fats:     { value: 13, unit: 'g'},
        proteins: { value: 94, unit: 'g'},
        carbs:    { value: 23, unit: 'g'},
      },
      portions:  1,
      supplies:  [
        {
        quantity:  { value: 250, unit: 'gr.'},
        supplie: "Avena",
        },
        {
          quantity: { value: 1, unit: 'tarro'},
          supplie: "Leche",
        },
        {
          quantity: { value: 1, unit: 'unid.'},
          supplie: "Huevo",
        },
        {
          quantity: { value: 1, unit: 'cdta.'},
          supplie: "Stevia o endulcorante",
        },
        {
          quantity: { value: 40, unit: 'gr.'},
          supplie: "Mantequilla",
        },
        {
          quantity: { value: 1, unit: 'cdta.'},
          supplie: "Esencia de vainilla",
        },
        {
          quantity: { value: 1, unit: 'unid.'},
          supplie: "Platano maduro",
        },
        {
          quantity: { value: 4, unit: 'unid.'},
          supplie: "Fresas",
        },
        {
          quantity: { value: 8, unit: 'unid.'},
          supplie: "Arándanos",
        },
        {
          quantity: { value: 3, unit: 'unid.'},
          supplie: "Aguaymanto",
        }
      ],
      preparation:       ["Vertir la avena en la agregar el resto de ingredientes, luego licuar. Sino también puedes colocarlo en un bowl y batir. ",
                            "Luego cocinar en sartén de teflon.",
                            "Servir con frutas y miel de abeja.",
                            "Decorar con 4 fresas, arandanos, aguaymantos y miel de abeja."],
      videoRoute:'https://drive.google.com/file/d/1QqAMbqsSoQ7s_uU96jRfxVeRerLUb5ur/preview',
      flowchartRoute: 'https://drive.google.com/file/d/1aRA0QRE6cCbSOcdjQV8BoQ6J4d1RbKV9/preview'
    },
    {
      id:           1,
      day: 'lunes',
      name:         "Hamburguesa",
      description:  "de lenteja con ensalada de tomate, lechuga y pepino.", 
      labels:       ["Saludable", "Lenteja", "Tomate", "Lechuga", "Bajo en calorías", "Vegetariano"],
      imgRoute:     "https://drive.google.com/uc?export=view&id=1RQaQ6N6JwZslXTRlfwRxBq2iC6_a3Ono",
      cookingTime:  { value: 40, unit: 'minutos'},
      difficult:    "medio",
      macros:       {
        calories: { value: 89, unit: 'Kcal'},
        fats:     { value: 4, unit: 'g'},
        proteins: { value: 14, unit: 'g'},
        carbs:    { value: 13, unit: 'g'},
      },
      portions:  1,
      supplies:  [
        {
        quantity:  { value: 1, unit: 'tz.'},
        supplie: "Lentejas sancochadas",
        },
        {
          quantity: { value: 2, unit: 'unid.'},
          supplie: "Huevos",
        },
        {
          quantity: { value: 0, unit: 'unid.'},
          supplie: "Sal y pimienta",
        },
        {
          quantity: { value: 1, unit: 'cdta.'},
          supplie: "Harina",
        },
        {
          quantity: { value: 1, unit: 'cdta.'},
          supplie: "Maicena",
        },
        {
          quantity: { value: 1, unit: 'cdta.'},
          supplie: "Perejil picado",
        },
        {
          quantity: { value: 1, unit: 'cdta.'},
          supplie: "Ajo picado finamente",
        },
        {
          quantity: { value: 2, unit: 'unid.'},
          supplie: "Panes",
        },
        {
          quantity: { value: 2, unit: 'unid.'},
          supplie: "Tomate",
        },
        {
          quantity: { value: 1, unit: 'unid.'},
          supplie: "Lechuga",
        },
        {
          quantity: { value: 1, unit: 'unid.'},
          supplie: "Pepino",
        },
      ],
      preparation:       ["Hacer aderezo.",
      "Agregar aderezo, harina, maicena, huevo, perejil y ajo.",
      "Dar forma y dorar por ambos lados.",
      "Servir sobre pan, con lechuga, tomate y pepino.",
      "Acompañar con salsas."],
      videoRoute:'https://drive.google.com/file/d/1lhg1SeRv8xU_fEGk9KHTwEuL4jm7ol08/preview',
      flowchartRoute: 'https://drive.google.com/file/d/1A0BkFz0sAj3ZyRxkRRkI5LbSwJQPJXRo/preview'
    },
  ];
  
  constructor(private http: HttpClient) { 
    
  }

  getRecipes(): Recipe[]{
    let results = this.recipes;
    return results;
  }

  getRecipe(id:number): Recipe[]{
    let results= this.recipes.filter(item=> item.id==id);
    return results;
  }

  getRecipesByName(name:string): Observable<Recipe[]>{
    const url = `${ this.apiUrl}name/${name}`;
    return this.http.get<Recipe[]>(url)
  }
}
