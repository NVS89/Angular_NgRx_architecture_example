import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';

import { primeNg } from './import';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
    declarations: [
        ItemListComponent,
        NavigationComponent
    ],
    imports: [
        CommonModule,
        ...primeNg
    ],
    exports: [
        ItemListComponent,
        NavigationComponent
    ]
})
export class SharedModule { }
