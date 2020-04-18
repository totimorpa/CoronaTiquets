import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuportPage } from './suport.page';

const routes: Routes = [
  {
    path: '',
    component: SuportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuportPageRoutingModule {}
