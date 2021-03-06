import { AppRoutingModule } from './app-routing.module';
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
import { routerReducer } from '@ngrx/router-store';

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
        AppRoutingModule,
        StoreModule.forRoot({
            router: routerReducer,
        }),
        EffectsModule.forRoot(),
        ...dev
    ],
    exports: [
        BrowserModule,
        AppRoutingModule
    ]
})
export class CoreModule { }
