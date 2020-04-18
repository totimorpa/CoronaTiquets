import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TiquetsUsuariPage } from './tiquets-usuari';

const routes: Routes = [
  {
    path: '',
    component: TiquetsUsuariPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiquetsUsuariPageRoutingModule { }
