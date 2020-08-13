import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IRecipeState, Ingredient, IRecipe } from '@recipes/models';
import { RecipeActions } from '../state/actions';

@Component({
    selector: 'app-add-recipie',
    templateUrl: './add-recipie.component.html',
    styleUrls: ['./add-recipie.component.scss']
})
export class AddRecipieComponent implements OnInit {

    recipeName: string;

    ingredients: Array<Ingredient> = [];

    constructor(
        private router: Router,
        private store: Store<IRecipeState>
    ) { }

    ngOnInit(): void {
    }

    addIngredientHandler(event: Ingredient){
        const ingredient = {
            ...event,
            id: Date.now()
        };
        this.ingredients = [...this.ingredients, ingredient];
    }

    deleteIngredientHandler(ingredientId){
        this.ingredients = this.ingredients.filter((i) => i.id !== ingredientId);
    }

    submitRecipeHandler(){
        const recipe: IRecipe = {
            name: this.recipeName,
            ingredients: this.ingredients,
            id: Date.now()
        };
        this.store.dispatch(
            new RecipeActions.AddRecipeRequest(recipe)
        );
        this.router.navigate(['/']);
    }


    isSubmitDisabled(){
        return !this.recipeName || this.ingredients.length === 0;
    }
}
