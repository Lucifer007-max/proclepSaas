import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user.component';
// import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // AppComponent
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    UserRoutingModule
  ],
  providers: [],
  bootstrap: [UserComponent]
})
export class UserModule { }
