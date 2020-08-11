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

    addIngredient(event: Ingredient){
        this.ingredients.push(event);
    }

    SubmitRecipe(){
        console.log('===================================================');
        console.log(this.ingredients);
        console.log(this.recipeName);
        console.log('===================================================');
    }
    isSubmitDisabled(){
        return !this.recipeName || this.ingredients.length === 0;
    }
}
