import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";
import { ProfileComponent } from "./profile/profile.component";

import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";



const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/messages', pathMatch: 'full' },
    { path: 'messages', component: MessagesComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }

];

export const routing = RouterModule.forRoot(APP_ROUTES);
