import { IRecipes } from '@recipes/models';
import { RecipeActions } from '../actions';


export const initialState: IRecipes = {
    recipesList: []
};

export function recipeReducer(state = initialState, action: RecipeActions.Actions) {
    switch (action.type) {
        case RecipeActions.ADD_RECIPE_SUCCESS:
            return {
                ...state,
                recipesList: [
                    ...state.recipesList,
                    action.payload
                ]
            };
        case RecipeActions.DELETE_RECIPE_SUCCESS:
            const recipesCopy = [...state.recipesList];
            const deletedRecipe = action.payload;
            const updatedList = recipesCopy.filter((r) => r.id !== deletedRecipe.id);
            return {
                ...state,
                recipesList: [
                    ...updatedList
                ]
            };
        case RecipeActions.ADD_RECIPE_FAIL:
        case RecipeActions.DELETE_RECIPE_FAIL:
            return state;
        default:
            return state;

    }
}

export const getRecipes = (state: IRecipes) => state.recipesList;
