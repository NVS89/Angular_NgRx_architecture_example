import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { ReviewRecipieComponent } from './review-recipie/review-recipie.component';
import { AddRecipieComponent } from './add-recipie/add-recipie.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
        {
            path: '',
            component: ReviewRecipieComponent,
        },
        {
            path: 'add',
            component: AddRecipieComponent,
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
