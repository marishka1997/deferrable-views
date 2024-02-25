import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeavyComponentComponent } from "./heavy-component/heavy-component.component";
import { SpinnerComponentComponent } from "./spinner-component/spinner-component.component";
import { PlaceholderComponentComponent } from "./placeholder-component/placeholder-component.component";
import { ErrorHandlerComponentComponent } from "./error-handler-component/error-handler-component.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HeavyComponentComponent,
        SpinnerComponentComponent,
        PlaceholderComponentComponent,
        ErrorHandlerComponentComponent
    ]
})
export class AppModule { }
