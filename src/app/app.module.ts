import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { Routes} from '@angular/router';
import { fakeBackendProvider } from './_helpers';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { RoutesService } from './RoutesService';
import { AlertComponent } from './Alert';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { SubnavComponent } from './side_nav/subnav.component';
import { from } from 'rxjs';



     

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        RoutesService,

        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }