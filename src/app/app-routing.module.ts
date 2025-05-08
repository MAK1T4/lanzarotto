import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: 'users', component: UsersComponent },
    { path: 'users/:id', component: UserDetailsComponent },
    { path: 'musicians', component: MusiciansComponent },
    { path: 'musicians/:id', component: MusicianDetailsComponent },
    { path: 'requests', component: RequestsComponent },
    { path: 'requests/:id', component: RequestDetailsComponent },
    { path: 'financial', component: FinancialComponent },
    { path: 'access', component: AccessComponent },
    { path: 'access/new', component: NewCollaboratorComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { } 