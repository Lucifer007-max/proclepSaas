import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SuperAdminRoutingModule } from './supreradmin-routing.module';
import { LoginComponent } from './login/login.component';
import { SuperComponent } from './super.component';
// import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // AppComponent
    SuperComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SuperAdminRoutingModule
  ],
  providers: [],
  bootstrap: [SuperComponent]
})
export class MasterModule { }
