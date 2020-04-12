import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupcomercPage } from './signupcomerc.page';

const routes: Routes = [
  {
    path: '',
    component: SignupcomercPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupcomercPageRoutingModule {}
