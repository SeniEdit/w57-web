import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/authentication/login/login.component';
import { RegisterComponent } from './pages/authentication/register/register.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedComponent } from './pages/shared/shared.component';
import { SettingsComponent } from './pages/settings/settings.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { 'includeInNavbar': false, 'hideNavbar': true } },
  { path: 'register', component: RegisterComponent, data: { 'includeInNavbar': false, 'hideNavbar': true } },
  { path: 'dashboard', component: DashboardComponent, data: { 'includeInNavbar': true, 'hideNavbar': false, 'icon': 'dashboard', 'title': 'Dashboard' } },
  { path: 'shared', component: SharedComponent, data: { 'includeInNavbar': true, 'hideNavbar': false, 'icon': 'home', 'title': '' } },
  { path: 'settings', component: SettingsComponent, data: { 'includeInNavbar': true, 'hideNavbar': false, 'icon': 'settings', 'title': 'Instellingen'} }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
