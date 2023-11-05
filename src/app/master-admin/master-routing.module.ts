import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterAdminComponent } from './master-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'master',
    component: MasterAdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
