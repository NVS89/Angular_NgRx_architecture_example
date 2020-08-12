import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './../../models/app-state.interfase';
import { IRecipe } from './../../models/recipe.interfase';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-review-recipie',
    templateUrl: './review-recipie.component.html',
    styleUrls: ['./review-recipie.component.scss']
})
export class ReviewRecipieComponent implements OnInit {

    recipeSub: Subscription;
    recipes: Array<IRecipe> = [];
    columns: Array<{field: string, header: string}>;

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
        ]
        this.recipeSub = this.store.select('recipes').subscribe(
            ({recipes}) => {
                this.recipes = [...recipes];
            }
        );
    }
}
