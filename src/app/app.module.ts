import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { counterReducer } from './core/reducers/counter-reducer';
import { MaterialComponentsModule } from './shared/material-components/material-components.module';
// import { WidgetComponentsModule } from "./shared/spinner-widget-component/spinner-widget-components.module";
import {  withFetch } from "@angular/common/http"
import { httpConfigurationInterceptorInterceptor } from './core/interceptor/http-configuration-interceptor.interceptor';


@NgModule({
    declarations: [AppComponent],
    providers: [
        provideClientHydration(),
        provideHttpClient(withInterceptors([httpConfigurationInterceptorInterceptor])),
        provideHttpClient(withFetch()),
        provideAnimationsAsync(),
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule,
        ReactiveFormsModule,
        MaterialComponentsModule,
        StoreModule.forRoot({ count: counterReducer })
    ]
})
export class AppModule {}
