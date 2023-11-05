import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client.component';
import { ClientLoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'client',
    component:ClientComponent,
    children : [
    {path : 'login' ,  component:ClientLoginComponent},
    {path : 'home' ,  component:HomeComponent}
   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
