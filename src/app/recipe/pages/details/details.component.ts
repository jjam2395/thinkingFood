import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";

import { Recipe } from '../../interfaces/recipe.interface';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  recipe!:Recipe;

  constructor( private activatedRoute:ActivatedRoute, private recipeService: RecipeService) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ({id}) =>{
      this.recipeService.getRecipe(id).subscribe( (response:any) => {
        this.recipe = response;
      }) 
    });
  }

  saveRecipe(recipe:Recipe){
    this.recipeService.saveRecipe(recipe).then(() => {
       console.log('recipe added: ',recipe);
    })
  }

}
