import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';

import { primeNg } from './import';

@NgModule({
    declarations: [
        ItemListComponent
    ],
    imports: [
        CommonModule,
        ...primeNg
    ],
    exports: [
        ItemListComponent
    ]
})
export class SharedModule { }
