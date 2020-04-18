import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { LlistaBotiguesPage } from './llista-botigues';
import { LlistaBotiguesRoutingModule } from './llista-botigues-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LlistaBotiguesRoutingModule
  ],
  declarations: [LlistaBotiguesPage],
})
export class LlistaBotiguesModule {}
