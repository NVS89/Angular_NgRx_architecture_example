import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from './../shared/shared.module';

import { RecipesComponent } from './recipes.component';
import { AddRecipieComponent } from './add-recipie/add-recipie.component';
import { ReviewRecipieComponent } from './review-recipie/review-recipie.component';


@NgModule({
  declarations: [RecipesComponent, AddRecipieComponent, ReviewRecipieComponent],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule { }
