import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MasterAdminRoutingModule } from './materadmin-routing.module';
import { MLoginComponent } from './m-login/m-login.component';
import { MasterComponent } from './master.component';
import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION,
  NgxUiLoaderRouterModule,
  NgxUiLoaderHttpModule,
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
    // AppComponent
    MasterComponent,

    MLoginComponent
  ],
  imports: [
    BrowserModule,
    MasterAdminRoutingModule,
    HttpClientModule, // import HttpClientModule
    NgxUiLoaderModule, // import NgxUiLoaderModule
    NgxUiLoaderHttpModule,
    NgxUiLoaderModule, // import NgxUiLoaderModule
    NgxUiLoaderRouterModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),

  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class MasterModule { }
