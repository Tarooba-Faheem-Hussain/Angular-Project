import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.servive";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
      new Recipe(
        'A test recipe',
        'This is simply a test',
        'https://hips.hearstapps.com/hmg-prod/images/oven-baked-burger1-1651152460.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
        [
          new ingredient('Meat', 1),
          new ingredient('French Fries', 20)
        ]),
      new Recipe(
        'Another test recipe',
        'This is simply a test',
        'https://hips.hearstapps.com/hmg-prod/images/oven-baked-burger1-1651152460.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
      [
        new ingredient ('Buns', 2),
        new ingredient ('Meat', 1)
      ])
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes() {
      return this.recipes.slice();
    }

    getRecipe(index: number){
      return this.recipes[index]; 
    }

    addIngredientsToShoppingList(ingredients: ingredient[]){
      this.slService.addIngredients(ingredients);
    }

}