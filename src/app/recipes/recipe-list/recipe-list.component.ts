import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes: Recipe[] = [
  new Recipe('A test recipe','This is simply a test', 'https://hips.hearstapps.com/hmg-prod/images/oven-baked-burger1-1651152460.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*'),
  new Recipe('Another test recipe','This is simply a test', 'https://hips.hearstapps.com/hmg-prod/images/oven-baked-burger1-1651152460.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*')
];

constructor(){}
ngOnInit(){}

onRecipeSelected(recipe: Recipe){
  this.recipeWasSelected.emit(recipe);
}
}
