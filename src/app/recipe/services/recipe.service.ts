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
      typemeal: 'Almuerzo',
      name:         "Hamburguesa",
      description:  "de lenteja con ensalada de tomate, lechuga y pepino.", 
      labels:       ["Saludable", "Lenteja", "Tomate", "Lechuga", "Bajo en calorías", "Vegetariano"],
      imgRoute:     "https://drive.google.com/uc?export=view&id=1mZKvuJC0AxGuvU19FmU_niyXAuv9Dl7F",
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
    {
      id:           2,
      typemeal:     "Desayuno",
      name:         "Omelette",
      description:  "de jamón, esparragos y queso.", 
      labels:       ["Saludable", "Huevo", "Jamón", "Espárragos", "Queso", "Cocina francesa"],
      imgRoute:     "assets/recipe/recipe-0/img/recipe-0-01.jpg",
      cookingTime:  { value: 10, unit: 'minutos'},
      difficult:    "intermedio",
      macros:       {
        calories: { value: 129, unit: 'Kcal'},
        fats:     { value: 4, unit: 'g'},
        proteins: { value: 12, unit: 'g'},
        carbs:    { value: 0.3, unit: 'g'},
      },
      portions:  1,
      supplies:  [
        {
        quantity:  { value: 8, unit: 'unid.'},
        supplie: "Huevo",
        },
        {
          quantity: { value: 1, unit: 'cda.'},
          supplie: "Mantequilla o margarina",
        },
        {
          quantity: { value: 70, unit: 'gr.'},
          supplie: "Jamón Inglés en cubos",
        },
        {
          quantity: { value: 50, unit: 'gr.'},
          supplie: "Queso Edam o Dambo",
        },
        {
          quantity: { value: 7, unit: 'unid.'},
          supplie: "Espárragos",
        },
      ],
      preparation:       
      ["Saltear espárragos y reservar.",
      "Batir huevos con sal.",
      "Calentar mantequilla.",
      "Agregar huevos.",
      "Cuajar moviendo con espátula y agregar relleno y dar forma."]
      
    },   
     {
      id:           3,
      typemeal:     "Almuerzo",
      name:         "Ají de gallina",
      description:  "con arroz y huevo cocido.", 
      labels:       ["Criolla", "Pechuga de pollo", "Ají amarillo", "Arroz", "Huevo", "Leche evaporada"],
      imgRoute:     "assets/recipe/recipe-0/img/recipe-0-01.jpg",
      cookingTime:  { value: 70, unit: 'minutos'},
      difficult:    "intermedio",
      macros:       {
        calories: { value: 198, unit: 'Kcal'},
        fats:     { value: 4, unit: 'g'},
        proteins: { value: 15, unit: 'g'},
        carbs:    { value: 25, unit: 'g'},
      },
      portions:  1,
      supplies:  [
        {
        quantity:  { value: 1, unit: 'unid.'},
        supplie: "Pechuga de pollo",
        },
        {
          quantity: { value: 4, unit: 'unid.'},
          supplie: "Ají amarillo",
        },
        {
          quantity: { value: 50, unit: 'gr.'},
          supplie: "Ají mirasol",
        },
        {
          quantity: { value: 30, unit: 'gr.'},
          supplie: "Ají panca",
        },
        {
          quantity: { value: 2, unit: 'unid.'},
          supplie: "Pan frances",
        }, 
        {
          quantity: { value: 1, unit: 'unid.'},
          supplie: "Ajo",
        },
        {
          quantity: { value: 30, unit: 'gr.'},
          supplie: "Queso parmesano",
        },
        {
          quantity: { value: 50, unit: 'gr.'},
          supplie: "Pecana rallada",
        },
        {
          quantity: { value: 0.5, unit: 'tz.'},
          supplie: "Leche evaporada",
        },
        {
          quantity: { value: 2, unit: 'tz.'},
          supplie: "Agua",
        },
        {
          quantity: { value: 2, unit: 'unid.'},
          supplie: "Cebolla",
        },
        {
          quantity: { value: 1, unit: 'unid.'},
          supplie: "Laurel",
        },
      ],
      preparation:       
      ["Cocinar el pollo en una olla para posteriormente, deshilachar.",
      "Hacer el aderezo: cebolla, ajos, ají amarillo (molido), ají mirasol (molido), ají panca (molido), fondo, pan remojado en leche (molido), la gallina deshilachada, queso desmenuzado.",
      "Cocinar y cuando este apunto agregar queso parmesano, pecanas.",
      "Servir y disfrutar."]
      
    },
    
     {
      id:           4,
      typemeal:     "Desayuno",
      name:         "Ensalada de frutas",
      description:  "papaya, melón, fresas, arándanos, aguaymando y aliño.", 
      labels:       ["Saludable", "Frutas", "Papaya", "Melón", "Arándanos", "Aguaymanto", "Bajo en calorias"],
      imgRoute:     "assets/recipe/recipe-0/img/recipe-0-01.jpg",
      cookingTime:  { value: 15, unit: 'minutos'},
      difficult:    "Baja",
      macros:       {
        calories: { value: 146, unit: 'Kcal'},
        fats:     { value: 0, unit: 'g'},
        proteins: { value: 1, unit: 'g'},
        carbs:    { value: 18, unit: 'g'},
      },
      portions:  1,
      supplies:  [
        {
        quantity:  { value: 0.25, unit: 'unid.'},
        supplie: "Papaya fresca",
        },
        {
          quantity: { value: 0.5, unit: 'unid.'},
          supplie: "Melón fresco",
        },
        {
          quantity: { value: 2, unit: 'unid.'},
          supplie: "Fresas",
        },
        {
          quantity: { value: 12, unit: 'unid.'},
          supplie: "Arándanos",
        },
        {
          quantity: { value: 2, unit: 'unid.'},
          supplie: "Aguaymanto",
        }, 
        {
          quantity: { value: 2, unit: 'unid.'},
          supplie: "Limón",
        },
        {
          quantity: { value: 0.5, unit: 'cdta.'},
          supplie: "Stevia",
        },
        {
          quantity: { value: 1, unit: 'cdta.'},
          supplie: "Escencia de vainilla",
        },
      ],
      preparation:       
      ["Corta las frutas en trozos pequeños o en gajos.",
      "Para el aliño: Mezclar el zumo de limón, ½ cdta. de stevia y 1 cdta.de esencia de vainilla."]
      
    },
    
     {
      id:           5,
      typemeal:     "Almuerzo",
      name:         "Polla a la mostaza",
      description:  "con ensalada cocida (arveja, zanahoria, vainita,  betarraga).", 
      labels:       ["Saludable", "Pollo", "Mostaza", "Arveja", "Zanahoria", "Vainita", "Betarraga"],
      imgRoute:     "assets/recipe/recipe-0/img/recipe-0-01.jpg",
      cookingTime:  { value: 45, unit: 'minutos'},
      difficult:    "Baja",
      macros:       {
        calories: { value: 251, unit: 'Kcal'},
        fats:     { value: 9.6, unit: 'g'},
        proteins: { value: 36.2, unit: 'g'},
        carbs:    { value: 3.6, unit: 'g'},
      },
      portions:  1,
      supplies:  [
        {
        quantity:  { value: 1, unit: 'tz.'},
        supplie: "Zanahoria sancochada",
        },
        {
          quantity: { value: 0.25, unit: 'kg.'},
          supplie: "Arvejas sancochadas",
        },
        {
          quantity: { value: 1, unit: 'tz.'},
          supplie: "Vainitas sancochadas",
        },
        {
          quantity: { value: 1, unit: 'unid.'},
          supplie: "Papa sancochada",
        },
        {
          quantity: { value: 0.5, unit: 'tz.'},
          supplie: "Betarraga sancochada",
        }, 
        {
          quantity: { value: 1, unit: 'unid.'},
          supplie: "Zumo de limón",
        },
        {
          quantity: { value: 2, unit: 'cdas.'},
          supplie: "Aceite de oliva",
        },
        {
          quantity: { value: 1, unit: 'cdta.'},
          supplie: "Sal y pimienta",
        },
      ],
      preparation:       
      ["Sancochar verduras mezclar con la papa caliente y condimentar con el zumo de limón aceite de oliva , perejil , sal y pimienta.",
      "Marinar la pechuga de pavo con sal, pimienta, mostaza sellar en aceite de oliva agregar caldo tomillo y dejar cocinar.",
      "Espesar con maicena y servir."]
      
    },
    
     {
      id:           6,
      typemeal:     "Almuerzo",
      name:         "Arroz con pollo",
      description:  "con ensalada criolla (cebolla, tomate y limón).", 
      labels:       ["Criolla", "Pollo", "Zanahoria", "Arveja", "Cebolla", "Tomate", "Limón"],
      imgRoute:     "assets/recipe/recipe-0/img/recipe-0-01.jpg",
      cookingTime:  { value: 60, unit: 'minutos'},
      difficult:    "Baja",
      macros:       {
        calories: { value: 450, unit: 'Kcal'},
        fats:     { value: 8, unit: 'g'},
        proteins: { value: 12, unit: 'g'},
        carbs:    { value: 60, unit: 'g'},
      },
      portions:  1,
      supplies:  [
        {
        quantity:  { value: 1, unit: 'unid.'},
        supplie: "Pollo (en presas)",
        },
        {
          quantity: { value: 1, unit: 'tz.'},
          supplie: "Caldo de pollo",
        },
        {
          quantity: { value: 2, unit: 'tz.'},
          supplie: "Arroz",
        },
        {
          quantity: { value: 80, unit: 'gr.'},
          supplie: "Cebolla",
        },
        {
          quantity: { value: 30, unit: 'gr.'},
          supplie: "Ajos",
        }, 
        {
          quantity: { value: 50, unit: 'gr.'},
          supplie: "Ají amarillo (molido)",
        },
        {
          quantity: { value: 20, unit: 'gr.'},
          supplie: "Ají mirasol (molido)",
        },
        {
          quantity: { value: 20, unit: 'gr.'},
          supplie: "Ají panca (molido)",
        },
        {
          quantity: { value: 60, unit: 'ml.'},
          supplie: "Aceite vegetal",
        },
        {
          quantity: { value: 1, unit: 'tz.'},
          supplie: "Culantro licuado",
        },
        {
          quantity: { value: 0.5, unit: 'tz.'},
          supplie: "Cerveza negra",
        },
        {
          quantity: { value: 0.5, unit: 'unid.'},
          supplie: "Pimiento",
        },
        {
          quantity: { value: 2, unit: 'unid.'},
          supplie: "Zanahoria",
        },
        {
          quantity: { value: 1, unit: 'tz.'},
          supplie: "Arvejas",
        },
        {
          quantity: { value: 1, unit: 'cdta.'},
          supplie: "Sal, pimienta y comino",
        },
      ],
      preparation:       
      ["Porcionar el pollo, salpimentar y sellar.",
      "Hacer un aderezo verde: cebolla, ajos, ají, amarillo, espinaca, culantro.",
      "Incorporar el pollo y la cerveza.",
      "En el fondo dejar cocinar el pollo y luego retirarlo.",
      "Agregar el arroz y las verduras.",
      "Servir y acompañar con una zarza de cebolla."]
      
    }, 
    
     {
      id:           7,
      typemeal:     "Desayuno",
      name:         "Jugo de papaya",
      description:  "con miel de abeja.", 
      labels:       ["Saludable", "Papaya", "Miel", "Jugo"],
      imgRoute:     "assets/recipe/recipe-0/img/recipe-0-01.jpg",
      cookingTime:  { value: 10, unit: 'minutos'},
      difficult:    "Baja",
      macros:       {
        calories: { value: 149, unit: 'Kcal'},
        fats:     { value: 0, unit: 'g'},
        proteins: { value: 0, unit: 'g'},
        carbs:    { value: 38, unit: 'g'},
      },
      portions:  1,
      supplies:  [
        {
        quantity:  { value: 0.5, unit: 'unid.'},
        supplie: "Papaya fresca",
        },
        {
          quantity: { value: 2, unit: 'cdas.'},
          supplie: "Miel",
        },
        {
          quantity: { value: 1, unit: 'lt.'},
          supplie: "Agua hervida",
        },
      ],
      preparation:       
      ["Pelar la papaya y cortar.",
      "Extraer sus pepas y limpiar.",
      "Cortar la papaya en trozos.",
      "Colocar los trozos y el agua en la licuadora.",
      "Añadir miel.",
      "Licuar."]
      
    },
    
     {
      id:           8,
      typemeal:     "Almuerzo",
      name:         "Chaufa de quinoa",
      description:  "con pollo en trozos.", 
      labels:       ["Saludable", "Quinoa", "Pechuga de pollo", "Kión", "Aceite de ajonjolí", "Pimiento", "Holantao", "Huevo"],
      imgRoute:     "assets/recipe/recipe-0/img/recipe-0-01.jpg",
      cookingTime:  { value: 75, unit: 'minutos'},
      difficult:    "Intermedio",
      macros:       {
        calories: { value: 454, unit: 'Kcal'},
        fats:     { value: 12, unit: 'g'},
        proteins: { value: 31, unit: 'g'},
        carbs:    { value: 57, unit: 'g'},
      },
      portions:  1,
      supplies:  [
        {
        quantity:  { value: 1, unit: 'unid.'},
        supplie: "Pechuga de pollo",
        },
        {
          quantity: { value: 1, unit: 'tz.'},
          supplie: "Quinoa",
        },
        {
          quantity: { value: 2, unit: 'cdas.'},
          supplie: "Aceite vegetal",
        },
        {
          quantity: { value: 1, unit: 'unid.'},
          supplie: "Pimiento",
        },
        {
          quantity: { value: 0.5, unit: 'gr.'},
          supplie: "Holantao",
        },
        {
          quantity: { value: 2, unit: 'cdas.'},
          supplie: "Zumo de kion",
        },
        {
          quantity: { value: 1, unit: 'tz.'},
          supplie: "Cebolla china",
        },
        {
          quantity: { value: 1, unit: 'cdas.'},
          supplie: "Aceite de ajonjolí",
        },
        {
          quantity: { value: 2, unit: 'cdas.'},
          supplie: "Sillao claro",
        },
        {
          quantity: { value: 2, unit: 'unid.'},
          supplie: "Huevos (tortilla)",
        },
      ],
      preparation:       
      ["Cocinar quinua con sal y agua (1 tz. de quinua x 1 tz. de agua a fuego suave por 20 m) y enfriar.",
      "Saltear el pollo con sal pimienta y retirar de la sarten. ",
      "Agregar pimiento, holantao, parte blanca de la cebolla china, quinua, zumo de kion, tortilla y la parte verde cebolla china.",
      "Servir y decorar con rulos cebolla china."]
      
    },
    
     {
      id:           9,
      typemeal:     "Desayuno",
      name:         "Puddin de chia",
      description:  "con mango.", 
      labels:       ["Saludable", "Chia", "Miel", "Mango"],
      imgRoute:     "assets/recipe/recipe-0/img/recipe-0-01.jpg",
      cookingTime:  { value: 6, unit: 'horas'},
      difficult:    "Baja",
      macros:       {
        calories: { value: 160, unit: 'Kcal'},
        fats:     { value: 9, unit: 'g'},
        proteins: { value: 6, unit: 'g'},
        carbs:    { value: 13, unit: 'g'},
      },
      portions:  1,
      supplies:  [
        {
        quantity:  { value: 1, unit: 'tarro'},
        supplie: "Leche vegetal",
        },
        {
          quantity: { value: 250, unit: 'gr.'},
          supplie: "Chia",
        },
        {
          quantity: { value: 2, unit: 'cdas.'},
          supplie: "Miel",
        },
        {
          quantity: { value: 1, unit: 'unid.'},
          supplie: "Mango entero",
        },
      ],
      preparation:       
      ["Disolver la leche vegetal con la misma cantidad de agua.",
      "Agregamos la chia.",
      "Agregar miel o edulcorante y dejar reposar por 6 horas.",
      "Servir con fruta de eleccion en cubos o trozos."]
      
    },
     {
      id:           10,
      day:'viernes',
      typemeal:     "Almuerzo",
      name:         "Pachamanca",
      description:  "a la olla de carne de cerdo y pollo", 
      labels:       ["Regional", "Carne", "Pollo", "Cerdo", "Choclo", "Habas"],
      imgRoute:     "assets/recipe/recipe-0/img/recipe-0-01.jpg",
      cookingTime:  { value: 60, unit: 'minutos'},
      difficult:    "Intermedio",
      macros:       {
        calories: { value: 365, unit: 'Kcal'},
        fats:     { value: 28, unit: 'g'},
        proteins: { value: 14, unit: 'g'},
        carbs:    { value: 12, unit: 'g'},
      },
      portions:  1,
      supplies:  [
        {
        quantity:  { value: 1, unit: 'unid.'},
        supplie: "Carne de pollo",
        },
        {
          quantity: { value: 1, unit: 'unid.'},
          supplie: "Carne de cerdo",
        },
        {
          quantity: { value: 50, unit: 'gr.'},
          supplie: "Ají panca (molido)",
        },
        {
          quantity: { value: 50, unit: 'gr.'},
          supplie: "Ajo (molido)",
        },
        {
          quantity: { value: 1, unit: 'tz.'},
          supplie: "Chicha de jora",
        },
        {
          quantity: { value: 1, unit: 'kg.'},
          supplie: "Papa huayro",
        },
        {
          quantity: { value: 1, unit: 'kg.'},
          supplie: "Camote amarillo",
        },
        {
          quantity: { value: 2, unit: 'unid.'},
          supplie: "Choclo entero",
        },
        {
          quantity: { value: 0.25, unit: 'kg.'},
          supplie: "Habas",
        },
        {
          quantity: { value: 1, unit: 'cdta.'},
          supplie: "Sal y pimienta",
        },
      ],
      preparation:       
      ["Cortar el pollo en trozos y colocar en un bowl grande junto con la carne de cerdo.",
      "Licuar las hierbas con la chicha de jora, ajos, ajíes, sal, pimienta comino para agregar sobre las carnes, dejar adobar de un día para otro.",
      "En una olla colocar los ingredientes.",
      "Dejar cocina por 1 hora midiendo la temperatura de cocción , 10 minutos fuego alto , 25 minutos fuego medio , 15 minutos fuego bajo."]
      
    }
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
