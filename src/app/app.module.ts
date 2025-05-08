import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { MusiciansComponent } from './musicians/musicians.component';
import { MusicianDetailsComponent } from './musicians/musician-details/musician-details.component';
import { RequestsComponent } from './requests/requests.component';
import { RequestDetailsComponent } from './requests/request-details/request-details.component';
import { FinancialComponent } from './financial/financial.component';
import { AccessComponent } from './access/access.component';
import { NewCollaboratorComponent } from './access/new-collaborator/new-collaborator.component';
import { PageTransitionComponent } from './components/page-transition';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        UsersComponent,
        UserDetailsComponent,
        MusiciansComponent,
        MusicianDetailsComponent,
        RequestsComponent,
        RequestDetailsComponent,
        FinancialComponent,
        AccessComponent,
        NewCollaboratorComponent,
        PageTransitionComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { } 