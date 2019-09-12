import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from "@angular/router";
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {LogoutComponent} from './logout/logout.component';

const routes: Routes = [
  {path: 'signin', component: LoginComponent,pathMatch: 'full'},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  {path: 'signin', component: LoginComponent},
  {path: 'signout', component: LogoutComponent},  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
