import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.servive';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{
@ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;

constructor(private slService: ShoppingListService){}

ngOnInit() {
  
}

onAddItem(){
  const ingName = this.nameInputRef.nativeElement.value;
  const ingAmount = this.amountInputRef.nativeElement.value;
  const newIngredient = new ingredient(ingName, ingAmount);
  this.slService.addIngredient(newIngredient);
}

}
