import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { IRecipeState, IRecipe } from '@recipes/models';
import { Subscription } from 'rxjs';
import { RecipeActions } from '../state/actions';

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
        private store: Store<IRecipeState>
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
