import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Master Admin Component
import { MasterAdminComponent } from './master-admin/master-admin.component';
import { DashboardComponent } from './master-admin/dashboard/dashboard.component';
import { MasterRoutingModule } from './master-admin/master-routing.module';
import { LoginComponent } from './master-admin/login/login.component';
// Client Component
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './client/home/home.component';
import { ClientRoutingModule } from './client/client-routing.module';
import { ClientLoginComponent } from './client/login/login.component';
import { SubAdminComponent } from './sub-admin/sub-admin.component';
import { SubAdminRoutingModule } from './sub-admin/sub-admin-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    MasterAdminComponent,
    DashboardComponent,
    ClientComponent,
    HomeComponent,
    LoginComponent,
    ClientLoginComponent,
    SubAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientRoutingModule,
    MasterRoutingModule,
    SubAdminRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
