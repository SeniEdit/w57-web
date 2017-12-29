import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { WebsocketService } from './services/websocket.service';
import { ChatService } from './services/chat.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent } from './common/navbar/navbar.component';
import { NavtabComponent } from './common/navbar/navtab/navtab.component';

import { LoginComponent } from './pages/authentication/login/login.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { SettingsComponent } from './pages/settings/settings.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedComponent } from './pages/shared/shared.component';

import { TasklistComponent } from './pages/shared/tasklist/tasklist.component';
import { TaskComponent } from './pages/shared/tasklist/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavtabComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SharedComponent,
    SettingsComponent,
    TasklistComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, WebsocketService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
