import { Action } from '@ngrx/store';
import { Ingredient } from './../../app/models/ingredient.model';

export const ADD_RECIPE_REQUEST = '[Recipe] add recipe request';
export const ADD_RECIPE_SUCCESS = '[Recipe] add recipe success';
export const ADD_RECIPE_FAIL = '[Recipe] add recipe fail';

export const DELETE_RECIPE_REQUEST = '[Recipe] delete recipe request';
export const DELETE_RECIPE_SUCCESS = '[Recipe] delete recipe success';
export const DELETE_RECIPE_FAIL = '[Recipe] delete recipe fail';

export class AddRecipeRequest implements Action {
    readonly type = ADD_RECIPE_REQUEST;
    constructor( public payload: { name: string, ingredients: Array<Ingredient> }) { }
}

export class AddRecipeSuccess implements Action {
    readonly type = ADD_RECIPE_SUCCESS;
    constructor( public payload: { name: string, ingredients: Array<Ingredient> }) { }
}

export class AddRecipeFail implements Action {
    readonly type = ADD_RECIPE_FAIL;
    constructor( ) { }
}

export class DeleteRecipeRequest implements Action {
    readonly type = DELETE_RECIPE_REQUEST;
    constructor( public payload: { name: string, ingredients: Array<Ingredient> }) { }
}

export class DeleteRecipeSuccess implements Action {
    readonly type = DELETE_RECIPE_SUCCESS;
    constructor( public payload: { name: string, ingredients: Array<Ingredient> }) { }
}

export class DeleteRecipeFail implements Action {
    readonly type = DELETE_RECIPE_FAIL;
    constructor() { }
}

export type Actions = AddRecipeRequest
 | AddRecipeSuccess
 | AddRecipeFail
 | DeleteRecipeRequest
 | DeleteRecipeSuccess
 | DeleteRecipeFail;
