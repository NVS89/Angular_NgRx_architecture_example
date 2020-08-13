import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import { IRecipeState, IRecipes } from '@recipes/models';
import * as RecipeReducer from './recipe.reducer';


export const RecipeFeatureReducer: ActionReducerMap<IRecipeState> = {
    recipes: RecipeReducer.recipeReducer
};

export const getRecipesState = createFeatureSelector<IRecipes>('recipes');
