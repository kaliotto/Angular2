import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

//routes
import { APP_ROUTING } from './app.routes';

//services
import { Auth } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

import {  provideAuth, AuthHttp, AuthConfig  } from 'angular2-jwt';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        PreciosComponent,
        ProtegidaComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        APP_ROUTING
    ],
    providers: [
      Auth,
      AuthGuardService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }