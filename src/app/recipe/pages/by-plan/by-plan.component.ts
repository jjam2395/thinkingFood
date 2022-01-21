import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Recipe } from '../../interfaces/recipe.interface';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-by-plan',
  templateUrl: './by-plan.component.html',
  styleUrls: ['./by-plan.component.scss']
})
export class ByPlanComponent implements OnInit {

 
  constructor(private recipeServices:RecipeService) { }
  recipes:Recipe[]=[];

  ngOnInit(): void {

    this.recipeServices.getRecipesFS().subscribe ((resp: any) => {
      this.recipes=resp;
      console.log('fs', resp);
    });
  }

  getDayRecipes(day:string):Recipe[] {
    let recipes:any = this.recipes.filter(recipe => recipe.day?.includes(day));
    return recipes;
    }


  
}
