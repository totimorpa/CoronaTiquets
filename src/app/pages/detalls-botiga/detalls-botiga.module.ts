import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallsBotigaPage } from './detalls-botiga';
import { DetallsBotigaPageRoutingModule } from './detalls-botiga-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DetallsBotigaPageRoutingModule
  ],
  declarations: [
    DetallsBotigaPage,
  ]
})
export class DetallsBotigaModule { }
