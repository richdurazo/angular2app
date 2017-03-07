import { NgModule } from '@angular/core';
import { NgSemanticModule } from 'ng-semantic';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";

import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";

import { AuthService } from "./auth/auth.service";
import { ProfileComponent } from "./profile/profile.component"
import { ErrorComponent } from "./errors/error.component"
import { ErrorService } from "./errors/error.service"
import { MessageModule } from "./messages/message.module"



@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ProfileComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule, 
        routing, 
        HttpModule,
        NgSemanticModule,
        MessageModule
        ],
    providers: [AuthService, ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}