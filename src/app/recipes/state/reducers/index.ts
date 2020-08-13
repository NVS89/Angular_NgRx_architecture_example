import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { IRecipeState } from '@recipes/models';
import * as RecipeReducer from './recipe.reducer';

export const RecipeFeatureReducer: ActionReducerMap<IRecipeState> = {
    recipes: RecipeReducer.recipeReducer
};

export const getRecipesState = createFeatureSelector<IRecipeState>('recipeModule');

export const getRecipesSliceSelector = createSelector(
    getRecipesState,
    (state: IRecipeState) => state.recipes
);

export const getRecipesSelector = createSelector(
    getRecipesSliceSelector,
    RecipeReducer.getRecipes
);
