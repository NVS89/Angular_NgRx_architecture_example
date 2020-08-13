import { IRecipes } from './../../../models';
import { RecipeActions } from '../actions';


export const initialState: IRecipes = {
    recipes: []
};

export function recipeReducer(state = initialState, action: RecipeActions.Actions) {
    switch (action.type) {
        case RecipeActions.ADD_RECIPE_SUCCESS:
            return {
                ...state,
                recipes: [
                    ...state.recipes,
                    action.payload
                ]
            };
        case RecipeActions.DELETE_RECIPE_SUCCESS:
            const recipesCopy = [...state.recipes];
            const deletedRecipe = action.payload;
            const updatedList = recipesCopy.filter((r) => r.id !== deletedRecipe.id);
            return {
                ...state,
                recipes: [
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
