import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../interfaces/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  
  private apiUrl: string = "https://thinkingfood-platzi-default-rtdb.firebaseio.com";
  items: any;
  recipes: Recipe[]=[
    {
      id:           0,
      day:          "lunes",
      typemeal:     "Desayuno",
      name:         "Panqueque",
      description:  "de avena y platanos con frutas (fresa, aguaymanto, arandanos, melón papaya).", 
      labels:       ["Saludable", "Avena", "Frutas", "Fresas", "Aguaymanto", "Miel", "Bajo en calorias", "Arándanos", "Melón", "Papaya"],
      imgRoute:     "https://drive.google.com/uc?export=view&id=1ExMfLfXTOh-z2NSjoLeDFxvTe9Q1aBXz",
      cookingTime:  { value: 30, unit: 'minutos'},
      difficult:    "medio",
      macros:       {
        calories: { value: 610, unit: 'Kcal'},
        fats:     { value: 13, unit: 'g'},
        proteins: { value: 94, unit: 'g'},
        carbs:    { value: 23, unit: 'g'},
      },
      originalPortions:  4,
      adultPortions: 4,
      childPortions: 0,
      supplies:  [
        {
        quantity:  { value: 250, unit: 'gr.'},
        alternativeQuantity:  { value: 1.5, unit: 'tazas'},
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
      videoRoute:'https://drive.google.com/file/d/1iKTQVRQDiP1GlbTjGJMlDnNasDtLNbME/preview',
      flowchartRoute: 'https://drive.google.com/file/d/1Ak_K0ZuhPMAlJ7OFoEjXlbQ_SPnkRIJT/preview',
      imgRouteDetalle:     "https://drive.google.com/uc?export=view&id=1UHuPhiZGqxKJnwQ4ya6takPsU8zg-JHi"
    },
    {
      id:           1,
      day: 'lunes',
      typemeal: 'Almuerzo',
      name:         "Hamburguesa",
      description:  "de lenteja con ensalada de tomate, lechuga y pepino.", 
      labels:       ["Saludable", "Lenteja", "Tomate", "Lechuga", "Bajo en calorías", "Vegetariano"],
      imgRoute:     "https://drive.google.com/uc?export=view&id=1_gKf8bEMlAziSVIz9-G3qd6muo4ytqPw",
      cookingTime:  { value: 40, unit: 'minutos'},
      difficult:    "medio",
      macros:       {
        calories: { value: 89, unit: 'Kcal'},
        fats:     { value: 4, unit: 'g'},
        proteins: { value: 14, unit: 'g'},
        carbs:    { value: 13, unit: 'g'},
      },
      originalPortions:  4,
      adultPortions: 4,
      childPortions: 0,
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
      flowchartRoute: 'https://drive.google.com/file/d/1A0BkFz0sAj3ZyRxkRRkI5LbSwJQPJXRo/preview',
      imgRouteDetalle:     "https://drive.google.com/uc?export=view&id=1hno7YYdGN6RBqtxTO9nA0vrkbO_-yD3h"
    },
    {
      id:           2,
      day:          "martes",
      typemeal:     "Desayuno",
      name:         "Omelette",
      description:  "de jamón, esparragos y queso.", 
      labels:       ["Saludable", "Huevo", "Jamón", "Espárragos", "Queso", "Cocina francesa"],
      imgRoute:     "https://drive.google.com/uc?export=view&id=1oQY1QnQFWLejjQmw_5oi9QDkUUBfVWlc",
      cookingTime:  { value: 10, unit: 'minutos'},
      difficult:    "intermedio",
      macros:       {
        calories: { value: 129, unit: 'Kcal'},
        fats:     { value: 4, unit: 'g'},
        proteins: { value: 12, unit: 'g'},
        carbs:    { value: 0.3, unit: 'g'},
      },
      originalPortions:  4,
      adultPortions: 4,
      childPortions: 0,
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
      "Cuajar moviendo con espátula y agregar relleno y dar forma."],
      videoRoute:'https://drive.google.com/file/d/1V_IwSlf7ul1489mdIVXMXIpkaGEBG3nf/preview',
      flowchartRoute: 'https://drive.google.com/file/d/1gdX1BkzlxVsmOLYvo79Qcl6zJhQKYEGk/preview',
      imgRouteDetalle:     "https://drive.google.com/uc?export=view&id=14vWkQkT0Ym5J5hehkgBxBXkUbe-GJ1FM"
      
    },   
     {
      id:           3,
      day:          "martes",
      typemeal:     "Almuerzo",
      name:         "Ají de gallina",
      description:  "con arroz y huevo cocido.", 
      labels:       ["Criolla", "Pechuga de pollo", "Ají amarillo", "Arroz", "Huevo", "Leche evaporada"],
      imgRoute:     "https://drive.google.com/uc?export=view&id=1ZVatBqZ_pmCK6JN_9D_oaqQh8hrnU9mB",
      cookingTime:  { value: 70, unit: 'minutos'},
      difficult:    "intermedio",
      macros:       {
        calories: { value: 198, unit: 'Kcal'},
        fats:     { value: 4, unit: 'g'},
        proteins: { value: 15, unit: 'g'},
        carbs:    { value: 25, unit: 'g'},
      },
      originalPortions:  4,
      adultPortions: 4,
      childPortions: 0,
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
      "Servir y disfrutar."],
      videoRoute:'https://drive.google.com/file/d/1pFs_i7fWMLlpwBUbmy2XIPc5mdMm0akz/preview',
      flowchartRoute: 'https://drive.google.com/file/d/1aRA0QRE6cCbSOcdjQV8BoQ6J4d1RbKV9/preview',
      imgRouteDetalle:     "https://drive.google.com/uc?export=view&id=1Na2jVuQlHpwjppHplEkM4P7VNWXx6Bgv"
      
    },
    
     {
      id:           4,
      day:          "miercoles",
      typemeal:     "Desayuno",
      name:         "Ensalada de frutas",
      description:  "papaya, melón, fresas, arándanos, aguaymando y aliño.", 
      labels:       ["Saludable", "Frutas", "Papaya", "Melón", "Arándanos", "Aguaymanto", "Bajo en calorias"],
      imgRoute:     "https://drive.google.com/uc?export=view&id=1lxfzO0S44hUIJQOp16gYyAeF5kuoWlS9",
      cookingTime:  { value: 15, unit: 'minutos'},
      difficult:    "Baja",
      macros:       {
        calories: { value: 146, unit: 'Kcal'},
        fats:     { value: 0, unit: 'g'},
        proteins: { value: 1, unit: 'g'},
        carbs:    { value: 18, unit: 'g'},
      },
      originalPortions:  4,
      adultPortions: 4,
      childPortions: 0,
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
      "Para el aliño: Mezclar el zumo de limón, ½ cdta. de stevia y 1 cdta.de esencia de vainilla."],
      videoRoute:'https://drive.google.com/file/d/1N8pDadrAJPANGB17PbilYLo_JCrK-UUP/preview',
      flowchartRoute: 'https://drive.google.com/file/d/1k6koP7azolmDziGNknqTCrCZruujlxp-/preview',
      imgRouteDetalle:     "https://drive.google.com/uc?export=view&id=1rjMzmABcWqp3l29bUpxROwwbTRtnMvyK"
      
    },
    
     {
      id:           5,
      day:          "miercoles",
      typemeal:     "Almuerzo",
      name:         "Polla a la mostaza",
      description:  "con ensalada cocida (arveja, zanahoria, vainita,  betarraga).", 
      labels:       ["Saludable", "Pollo", "Mostaza", "Arveja", "Zanahoria", "Vainita", "Betarraga"],
      imgRoute:     "https://drive.google.com/uc?export=view&id=1kZXCedrB7nEPoOPVI8giyNfC_dEPUamR",
      cookingTime:  { value: 45, unit: 'minutos'},
      difficult:    "Baja",
      macros:       {
        calories: { value: 251, unit: 'Kcal'},
        fats:     { value: 9.6, unit: 'g'},
        proteins: { value: 36.2, unit: 'g'},
        carbs:    { value: 3.6, unit: 'g'},
      },
      originalPortions:  4,
      adultPortions: 4,
      childPortions: 0,
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
      "Espesar con maicena y servir."],
      videoRoute:'https://drive.google.com/file/d/1u2iwm2jVGjysijvhRizEY-bklQOIIqIc/preview',
      flowchartRoute: 'https://drive.google.com/file/d/1fjs_i3IIFXZdYbjTjLnbCkYgUK1maL7M/preview',
      imgRouteDetalle:     "https://drive.google.com/uc?export=view&id=1y0ViWyr0uJCIMJccIyLRxKfY939O6p8K"
      
    },
    {
      id:           6,
      day:          "jueves",
      typemeal:     "Desayuno",
      name:         "Panqueque",
      description:  "de avena y platanos con frutas (fresa, aguaymanto, arandanos, melón papaya).", 
      labels:       ["Saludable", "Avena", "Frutas", "Fresas", "Aguaymanto", "Miel", "Bajo en calorias", "Arándanos", "Melón", "Papaya"],
      imgRoute:     "https://drive.google.com/uc?export=view&id=1ExMfLfXTOh-z2NSjoLeDFxvTe9Q1aBXz",
      cookingTime:  { value: 30, unit: 'minutos'},
      difficult:    "medio",
      macros:       {
        calories: { value: 610, unit: 'Kcal'},
        fats:     { value: 13, unit: 'g'},
        proteins: { value: 94, unit: 'g'},
        carbs:    { value: 23, unit: 'g'},
      },
      originalPortions:  4,
      adultPortions: 4,
      childPortions: 0,
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
      videoRoute:'https://drive.google.com/file/d/1iKTQVRQDiP1GlbTjGJMlDnNasDtLNbME/preview',
      flowchartRoute: 'https://drive.google.com/file/d/1Ak_K0ZuhPMAlJ7OFoEjXlbQ_SPnkRIJT/preview',
      imgRouteDetalle:     "https://drive.google.com/uc?export=view&id=1UHuPhiZGqxKJnwQ4ya6takPsU8zg-JHi"
    },
    
     {
      id:           7,
      day:          "jueves",
      typemeal:     "Almuerzo",
      name:         "Arroz con pollo",
      description:  "con ensalada criolla (cebolla, tomate y limón).", 
      labels:       ["Criolla", "Pollo", "Zanahoria", "Arveja", "Cebolla", "Tomate", "Limón"],
      imgRoute:     "https://drive.google.com/uc?export=view&id=1yDOkqBcZEMRTplXacGDFDSkzyhs8W9Y4",
      cookingTime:  { value: 60, unit: 'minutos'},
      difficult:    "Baja",
      macros:       {
        calories: { value: 450, unit: 'Kcal'},
        fats:     { value: 8, unit: 'g'},
        proteins: { value: 12, unit: 'g'},
        carbs:    { value: 60, unit: 'g'},
      },
      originalPortions:  4,
      adultPortions: 4,
      childPortions: 0,
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
      "Servir y acompañar con una zarza de cebolla."],
      videoRoute:'https://drive.google.com/file/d/1H_cCTocqXWDLcIRjqVf_J3Rfny6ZTspl/preview',
      flowchartRoute: 'https://drive.google.com/file/d/1XjEW8Yy1tvi-VqRXVo1Nqx9LIHKilOnG/preview',
      imgRouteDetalle:     "https://drive.google.com/uc?export=view&id=1kqtETwIgTU2hMMU9ZwDY47Wh9fhUNJGb"
      
    }, 
    
     {
      id:           8,
      day:          "viernes",
      typemeal:     "Desayuno",
      name:         "Jugo de papaya",
      description:  "con miel de abeja.", 
      labels:       ["Saludable", "Papaya", "Miel", "Jugo"],
      imgRoute:     "https://drive.google.com/uc?export=view&id=182Rx-wKcgNX7rKsxkN0FnhyCllPakG5e",
      cookingTime:  { value: 10, unit: 'minutos'},
      difficult:    "Baja",
      macros:       {
        calories: { value: 149, unit: 'Kcal'},
        fats:     { value: 0, unit: 'g'},
        proteins: { value: 0, unit: 'g'},
        carbs:    { value: 38, unit: 'g'},
      },
      originalPortions:  4,
      adultPortions: 4,
      childPortions: 0,
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
      "Licuar."],
      videoRoute:'https://drive.google.com/file/d/1jz_m7rfpHyBgfnYPrjZOfDeaaapjZoVF/preview',
      flowchartRoute: 'https://drive.google.com/file/d/1qqxv3LtNnVp5BHkcWqGf3jH-6LAPErOd/preview',
      imgRouteDetalle:     "https://drive.google.com/uc?export=view&id=1RbkCNR_g89b43nFrnOXRflPbhBBX_h-y"
      
    },
    
     {
      id:           9,
      day:          "viernes",
      typemeal:     "Almuerzo",
      name:         "Chaufa de quinoa",
      description:  "con pollo en trozos.", 
      labels:       ["Saludable", "Quinoa", "Pechuga de pollo", "Kión", "Aceite de ajonjolí", "Pimiento", "Holantao", "Huevo"],
      imgRoute:     "https://drive.google.com/uc?export=view&id=1qAovTd0CJqYL9JBTiLKHjViI8wHKZ72F",
      cookingTime:  { value: 75, unit: 'minutos'},
      difficult:    "Intermedio",
      macros:       {
        calories: { value: 454, unit: 'Kcal'},
        fats:     { value: 12, unit: 'g'},
        proteins: { value: 31, unit: 'g'},
        carbs:    { value: 57, unit: 'g'},
      },
      originalPortions:  4,
      adultPortions: 4,
      childPortions: 0,
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
      "Servir y decorar con rulos cebolla china."],
      videoRoute:'https://drive.google.com/file/d/1VFDyd3QWv87CXNmd0mUeAVN5F8DWoNmE/preview',
      flowchartRoute: 'https://drive.google.com/file/d/1QZg4raktLVxwiSI4Q4YtnhLOj3rNzBsN/preview',
      imgRouteDetalle:     "https://drive.google.com/uc?export=view&id=17lTHSTdPKB_pku155b7R8j21Nzu_DrvL"
      
    },
     {
      id:           10,
      day:          "sabado",
      typemeal:     "Desayuno",
      name:         "Puddin de chia",
      description:  "con mango.", 
      labels:       ["Saludable", "Chia", "Miel", "Mango"],
      imgRoute:     "https://drive.google.com/uc?export=view&id=105q-21FXAinyd_gNnzoh6U7lGwU0srzf",
      cookingTime:  { value: 6, unit: 'horas'},
      difficult:    "Baja",
      macros:       {
        calories: { value: 160, unit: 'Kcal'},
        fats:     { value: 9, unit: 'g'},
        proteins: { value: 6, unit: 'g'},
        carbs:    { value: 13, unit: 'g'},
      },
      originalPortions:  4,
      adultPortions: 4,
      childPortions: 0,
      supplies:  [
        {
        quantity:  {
                     value: 1, unit: 'tarro'
                   },
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
      "Servir con fruta de eleccion en cubos o trozos."],
      videoRoute:'https://drive.google.com/file/d/1pa79w3Fw3TdJXZ05zzQMzx4Hw8FgoP-1/preview',
      flowchartRoute: 'https://drive.google.com/file/d/1ROlzgMNIHIDQGHsrerG3bIZXXdw6kXrI/preview',
      imgRouteDetalle:     "https://drive.google.com/uc?export=view&id=1WmCHnDHZkxJZgg7To_vv8p4KboGYCgrr"
      
    },
     {
      id:           11,
      day:          "sabado",
      typemeal:     "Almuerzo",
      name:         "Pachamanca",
      description:  "a la olla de carne de cerdo y pollo",
      labels:       ["Regional", "Carne", "Pollo", "Cerdo", "Choclo", "Habas"],
      imgRoute:     "https://drive.google.com/uc?export=view&id=1xmtjoIVAbDEOwOETSrcT_jwCbxwMn-2E",
      cookingTime:  { value: 60, unit: 'minutos'},
      difficult:    "Intermedio",
      macros:       {
        calories: { value: 365, unit: 'Kcal'},
        fats:     { value: 28, unit: 'g'},
        proteins: { value: 14, unit: 'g'},
        carbs:    { value: 12, unit: 'g'},
      },
      originalPortions:  4,
      adultPortions: 4,
      childPortions: 0,
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
      "Dejar cocina por 1 hora midiendo la temperatura de cocción , 10 minutos fuego alto , 25 minutos fuego medio , 15 minutos fuego bajo."],
      videoRoute:'https://drive.google.com/file/d/14wmUJl1KugJSFuFYYOidVnb-eDuIzY0h/preview',
      flowchartRoute: 'https://drive.google.com/file/d/1Pa2yuVMA6FzROjHTzZHiyXq6oRmCvEvm/preview',
      imgRouteDetalle:     "https://drive.google.com/uc?export=view&id=1mB4qsNXbNBIZP5AEyv3NdCAE1jroTZz_"
      
    }
  ];
  
  constructor(private http: HttpClient) {

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
}
