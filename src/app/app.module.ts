import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterAdminRoutingModule } from './master-admin/materadmin-routing.module';
import { SuperAdminRoutingModule } from './super-admin/supreradmin-routing.module';
import { UserRoutingModule } from './user/user-routing.module';
import { UserComponent } from './user/user.component';
import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION,
  NgxUiLoaderHttpModule,
  NgxUiLoaderRouterModule,
} from "ngx-ui-loader";
import { HttpClientModule } from '@angular/common/http';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "red",
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.chasingDots, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Core Routing Module
    MasterAdminRoutingModule,
    SuperAdminRoutingModule,
    UserRoutingModule,
    HttpClientModule, // import HttpClientModule
    NgxUiLoaderModule, // import NgxUiLoaderModule
    NgxUiLoaderHttpModule,
    NgxUiLoaderModule, // import NgxUiLoaderModule
    NgxUiLoaderRouterModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
