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

  constructor( private activatedRoute:ActivatedRoute, private recipeService: RecipeService) { }
  recipe!:Recipe;

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( ({id}) =>{
      console.log(id);
      this.recipe=this.findRecipeId(id)
    });
    
  }

  findRecipeId(id:number):Recipe{
    let result = this.recipeService.getRecipe(id);
    if (result.length>0)
      console.log(result);
    return result[0];
  }
}
