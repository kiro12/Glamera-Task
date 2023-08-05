import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {CanActivateUser} from "./guards/is-user-approved.guard";

const routes: Routes = [
  { path: '', loadComponent: () => import('src/app/components/login/login.component').then(m => m.LoginComponent) },
  { path: 'business',  loadComponent: () => import('src/app/components/business-inform/business-inform.component').then(m => m.BusinessInformComponent) , canActivate:[CanActivateUser] },
  { path: 'success',  loadComponent: () => import('src/app/components/success/success.component').then(m => m.SuccessComponent) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
