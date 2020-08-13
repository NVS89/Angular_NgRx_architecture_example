import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from './../shared/shared.module';

import { RecipesComponent } from './recipes.component';
import { AddRecipieComponent } from './add-recipie/add-recipie.component';
import { ReviewRecipieComponent } from './review-recipie/review-recipie.component';
import { IngredientSelectorComponent } from './add-recipie/ingredient-selector/ingredient-selector.component';
import { RecipeDataComponent } from './add-recipie/recipe-data/recipe-data.component';

import { RecipeFeatureReducer } from './state/reducers';
import { RecipeEffects } from './state/effects';


import { primeNg } from './import';

@NgModule({
    declarations: [
        RecipesComponent,
        AddRecipieComponent,
        ReviewRecipieComponent,
        IngredientSelectorComponent,
        RecipeDataComponent,
    ],
    imports: [
        CommonModule,
        RecipesRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        StoreModule.forFeature('recipeModule', RecipeFeatureReducer),
        EffectsModule.forFeature([RecipeEffects]),
        ...primeNg,
    ]
})
export class RecipesModule { }
