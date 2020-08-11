import { Component, OnInit } from '@angular/core';
import { navigationList } from './../constants/navigation';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

    constructor() { }

    navigationList: Array<{
        label: string,
        path: string
    }>;

    ngOnInit(): void {
        this.navigationList = navigationList;
    }

}
