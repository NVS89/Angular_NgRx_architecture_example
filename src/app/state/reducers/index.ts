import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import { IAppState, IRecipes } from './../../models';
import * as RecipeReducer from './recipe.reducer'


export const rootReducer: ActionReducerMap<IAppState> = {
    recipes: RecipeReducer.recipeReducer
};

export const getRecipesState = createFeatureSelector<IRecipes>('recipes');
