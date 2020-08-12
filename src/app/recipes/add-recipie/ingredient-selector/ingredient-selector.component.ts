import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Ingredient } from './../../../models/ingredient.model';

@Component({
    selector: 'app-ingredient-selector',
    templateUrl: './ingredient-selector.component.html',
    styleUrls: ['./ingredient-selector.component.scss']
})
export class IngredientSelectorComponent implements OnInit {
    @Output() addIngredient: EventEmitter<Ingredient> = new EventEmitter();
    ingredientForm: FormGroup;

    constructor() { }

    ngOnInit(): void {
        this.ingredientForm = new FormGroup({
            name: new FormControl(null, Validators.required),
            quantity: new FormControl(null, Validators.required),
        });
    }

    formSubmitHandler(){
        this.addIngredient.emit(this.ingredientForm.value);
    }

}

