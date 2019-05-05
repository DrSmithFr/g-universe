import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {SharedModule} from '../shared/shared.module';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {LoginComponent} from './login/login.component';


export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule(
  {
    declarations: [
      LoginComponent,
      ResetPasswordComponent,
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes),
      SharedModule
    ],
    entryComponents: [
      ResetPasswordComponent
    ]
  }
)
export class ConnectionModule {
}
