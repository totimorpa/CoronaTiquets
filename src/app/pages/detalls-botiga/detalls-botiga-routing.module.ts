import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DetallsBotigaPage } from './detalls-botiga';

const routes: Routes = [
  {
    path: '',
    component: DetallsBotigaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallsBotigaPageRoutingModule { }
