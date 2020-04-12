import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotigaPage } from './botiga.page';

const routes: Routes = [
  {
    path: '',
    component: BotigaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotigaPageRoutingModule {}
