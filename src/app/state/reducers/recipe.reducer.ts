import { IRecipe, IRecipes } from './../../models';
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
        case RecipeActions.ADD_RECIPE_SUCCESS:

        case RecipeActions.ADD_RECIPE_FAIL:
        case RecipeActions.DELETE_RECIPE_FAIL:
            return state;
        default:
            return state;

    }
}
