import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubAdminComponent } from './sub-admin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'super/login', component: LoginComponent },
  {
    path: 'super',
    component: SubAdminComponent,
    children: [
      // { path: 'dashboard', component: DashboardComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SubAdminRoutingModule { }
