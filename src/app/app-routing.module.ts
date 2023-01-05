import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';

const routes: Routes = [
  {path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LateralMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
