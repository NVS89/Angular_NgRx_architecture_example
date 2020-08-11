import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';


@Component({
    selector: 'app-recipe-data',
    templateUrl: './recipe-data.component.html',
    styleUrls: ['./recipe-data.component.scss']
})
export class RecipeDataComponent implements OnInit {

    @Input()
    set ingredientsList(value: Array<Ingredient>) {
        debugger
        this._ingredientsList = [...value];
    }

    get ingredientsList(){
        return this._ingredientsList;
    }

    _ingredientsList: Array<Ingredient>;

    constructor() { }

    ngOnInit(): void {
    }

}
