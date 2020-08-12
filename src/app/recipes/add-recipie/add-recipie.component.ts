import { Component, OnInit } from '@angular/core';
import { Ingredient, } from './../../models/ingredient.model';

@Component({
    selector: 'app-add-recipie',
    templateUrl: './add-recipie.component.html',
    styleUrls: ['./add-recipie.component.scss']
})
export class AddRecipieComponent implements OnInit {

    recipeName: string;

    ingredients: Array<Ingredient> = [];

    constructor() { }

    ngOnInit(): void {
    }

    addIngredientHandler(event: Ingredient){
        this.ingredients.push(event);
    }

    deleteIngredientHandler({ingredient, index}){
        const ingredientsCopy = [...this.ingredients];
        this.ingredients = [...ingredientsCopy.slice(0, index), ...ingredientsCopy.slice(index + 1)];
    }

    submitRecipeHandler(){
        console.log('===================================================');
        console.log(this.ingredients);
        console.log(this.recipeName);
        console.log('===================================================');
    }


    isSubmitDisabled(){
        return !this.recipeName || this.ingredients.length === 0;
    }
}
