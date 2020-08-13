import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '@recipes/models';

@Component({
    selector: 'app-recipe-data',
    templateUrl: './recipe-data.component.html',
    styleUrls: ['./recipe-data.component.scss']
})
export class RecipeDataComponent implements OnInit {
    @Output() deleteIngredient: EventEmitter<{ ingredient: Ingredient, index: number }> = new EventEmitter();

    @Input()
    set ingredientsList(value: Array<Ingredient>) {
        this._ingredientsList = [...value];
    }

    get ingredientsList(){
        return this._ingredientsList;
    }


    _ingredientsList: Array<Ingredient>;

    constructor() { }

    ngOnInit(): void {
    }

    deleteIngredientHandler(ingredient){
        this.deleteIngredient.emit(ingredient.id);
    }

}
