import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// constants
import { environment } from './../../environments/environment';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// state
// import { rootReducer } from './../state/reducers/index';
// import { RecipeEffects } from './../state/effects/recipe.effects';

let dev = [
    StoreDevtoolsModule.instrument({
        maxAge: 25,
    }),
];

if (environment.production) {
    dev = [];
}

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        BrowserModule,
        StoreModule.forRoot([]),
        EffectsModule.forRoot(),
        ...dev
    ],
    exports: [
        BrowserModule,
    ]
})
export class CoreModule { }
