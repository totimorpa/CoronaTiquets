import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LlistaBotiguesPage } from './llista-botigues';
const routes: Routes = [
  {
    path: '',
    component: LlistaBotiguesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LlistaBotiguesRoutingModule {}
