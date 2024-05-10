import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

recipes: Recipe[] = [
  new Recipe('A test recipe','This is simply a test', 'https://hips.hearstapps.com/hmg-prod/images/oven-baked-burger1-1651152460.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',[]),
  new Recipe('Another test recipe','This is simply a test', 'https://hips.hearstapps.com/hmg-prod/images/oven-baked-burger1-1651152460.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',[])
];

constructor(private recipeService: RecipeService,
  private router: Router,
private route: ActivatedRoute){

}
ngOnInit(){
  this.recipes = this.recipeService.getRecipes();
}
onNewRecipe(){
  this.router.navigate(['new'], {relativeTo: this.route});
}

}
