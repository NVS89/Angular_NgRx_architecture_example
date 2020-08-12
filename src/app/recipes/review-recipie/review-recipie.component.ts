import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { IAppState } from './../../models/app-state.interfase';
import { IRecipe } from './../../models/recipe.interfase';
import { Subscription } from 'rxjs';
import { RecipeActions } from 'src/app/state/actions';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-review-recipie',
    templateUrl: './review-recipie.component.html',
    styleUrls: ['./review-recipie.component.scss']
})
export class ReviewRecipieComponent implements OnInit {

    recipeSub: Subscription;
    recipes: Array<IRecipe> = [];
    columns: Array<{ field: string, header: string }>;
    menu: Array<MenuItem>;
    selectedRecord: IRecipe;

    constructor(
        private store: Store<IAppState>
    ) { }

    ngOnInit(): void {
        this.columns = [
            {
                header: 'ID',
                field: 'id'
            },
            {
                header: 'Name',
                field: 'name'
            }
        ];

        this.menu = [
            { label: 'Delete', icon: 'pi pi-times', command: (event) => this.deleteRecipe(this.selectedRecord) }
        ];

        this.recipeSub = this.store.select('recipes').subscribe(
            ({ recipes }) => {
                debugger
                this.recipes = [...recipes];
            }
        );
    }

    selectedRecordChange(event){
        this.selectedRecord = event;
    }

    deleteRecipe(record) {
        this.store.dispatch(new RecipeActions.DeleteRecipeRequest(record));
    }
}
