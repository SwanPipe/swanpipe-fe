import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LoginAccountComponent} from "./login-account/login-account.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login-account', component: LoginAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
