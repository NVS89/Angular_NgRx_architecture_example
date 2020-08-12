import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './../../models/app-state.interfase';
import { Ingredient } from './../../models/ingredient.model';
import { IRecipe } from './../../models/recipe.interfase';
import { RecipeActions } from '../../state/actions';

@Component({
    selector: 'app-add-recipie',
    templateUrl: './add-recipie.component.html',
    styleUrls: ['./add-recipie.component.scss']
})
export class AddRecipieComponent implements OnInit {

    recipeName: string;

    ingredients: Array<Ingredient> = [];

    constructor(
        private store: Store<IAppState>
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
    }


    isSubmitDisabled(){
        return !this.recipeName || this.ingredients.length === 0;
    }
}
