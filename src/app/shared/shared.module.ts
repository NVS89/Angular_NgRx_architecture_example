import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ItemListComponent } from './item-list/item-list.component';
import { NavigationComponent } from './navigation/navigation.component';

import { primeNg } from './import';

@NgModule({
    declarations: [
        ItemListComponent,
        NavigationComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ...primeNg
    ],
    exports: [
        ItemListComponent,
        NavigationComponent
    ]
})
export class SharedModule { }
