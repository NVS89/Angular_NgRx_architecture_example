
import { Injectable } from '@angular/core';
import { switchMap, catchError } from 'rxjs/operators';
import { Action, Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { IAppState } from './../../models/app-state.interfase';
import { RecipeActions } from '../actions';

@Injectable()
export class RecipeEffects {
    constructor(
        private actions$: Actions
    ) { }

    @Effect()
    saveRecipe$: Observable<Action> = this.actions$.pipe(
        ofType(RecipeActions.ADD_RECIPE_REQUEST),
        switchMap(
            ({ payload }): Observable<Action> => {
                return of(new RecipeActions.AddRecipeSuccess(payload));
            }
        ),
        catchError(error => {
            return of(new RecipeActions.AddRecipeFail());
        })

    );


    @Effect()
    deleteRecipe$: Observable<Action> = this.actions$.pipe(
        ofType(RecipeActions.DELETE_RECIPE_REQUEST),
        switchMap(
            ({ payload }): Observable<Action> => {
                return of(new RecipeActions.DeleteRecipeSuccess(payload));
            }
        ),
        catchError(error => {
            return of(new RecipeActions.DeleteRecipeFail());
        })
    );

}
