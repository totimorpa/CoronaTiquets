import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiquetsPage } from './tiquets.page';

const routes: Routes = [
  {
    path: '',
    component: TiquetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiquetsPageRoutingModule {}
